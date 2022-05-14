import axios from "axios";

function sendData(name, email){
    let apiUrl = 'https://corebiz-test.herokuapp.com/api/v1/newsletter'

    axios.post(apiUrl, {
        name: name,
        email: email
    })
    .then(function (response) {
        window.dispatchEvent( new Event('newsletterSendSucess'))
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function SubmitForm(props){

    var name = props.nameToData
    var email = props.emailToData

    return(
        <button 
        disabled={props.isDisabled}
        onClick={(e) => sendData(name, email)}
        className="newsletter__button"
        >Eu quero!</button>
    )
}