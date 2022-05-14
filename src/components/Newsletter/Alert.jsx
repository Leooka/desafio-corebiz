export default function Alert(props){
    var alertText;

    if(props.nameAlertisActive === true){
        alertText = 'Preencha com seu nome completo'
    }

    if(props.emailAlertisActive === true){
        alertText = 'Preencha com um e-mail válido'
    }

    return(
        <div className="alert">
            <span className="alert__text">{alertText}</span>
        </div>
    )
}