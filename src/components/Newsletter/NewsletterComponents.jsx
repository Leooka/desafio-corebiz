import React from 'react'
import { useState, useEffect } from 'react'
import SubmitForm from "./SubmitForm"
import Alert from './Alert'
import SucessNewsletter from './SucessNewsletter'
import { onlyLetters } from "./functions/newsletterFunctions"

export default function NewSletterForm(){

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [emailAlert, setEmailAlert] = useState(false)
    const [nameAlert, setNameAlert] = useState(false)
    const [sucess, setSucess] = useState(false)

    window.addEventListener('newsletterSendSucess', () => {
        setSucess(true)
    })
    
    function formValidate(dataName, dataEmail){
        if(dataName){
            if(onlyLetters(dataName)){
                setNameAlert(false)
            }else{
                setNameAlert(true)
            }
        }else{
            setNameAlert(true)
        }
        
        //Validacao Email
        if(dataEmail){
            if(dataEmail.includes('@') && dataEmail.includes('.com')){
                setEmailAlert(false)
            }else{
                setEmailAlert(true)
            }
        }else{
            setEmailAlert(true)
        }
    }

    useEffect(() => {
        if(name || email){
            formValidate(name, email)
        }
    }, [name, email]);

    return(
        <div className="newsletter__form">
            {sucess == false && (
                <React.Fragment>
                    <div className="newsletter__inputarea">
                        <input 
                        type="text" 
                        className={`newsletter__input ${nameAlert === true ? 'error' : ''}`}
                        maxLength="80" 
                        name="newsletter__name" 
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}/>
                        <Alert nameAlertisActive={nameAlert} />
                    </div>

                    <div className="newsletter__inputarea">
                        <input 
                        type="text" 
                        className={`newsletter__input ${emailAlert === true ? 'error' : ''}`} 
                        maxLength="80" 
                        name="newsletter__email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <Alert emailAlertisActive={emailAlert} />
                    </div>

                <SubmitForm isDisabled={nameAlert == false && emailAlert == false ? false : true} nameToData={ name } emailToData ={ email }/>
            </React.Fragment>
            )}

            {sucess === true && (
                <div className="newsletter__sucessnew">
                    <SucessNewsletter />
                    <button 
                        className="newsletter__newemail"
                        onClick={() => setSucess(false)}
                    >Cadastrar novo e-mail</button>
                </div>
            )}
        </div>
    )
}