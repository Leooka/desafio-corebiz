export function onlyLetters(text){
    let letters = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/; //Somente letras e espacos

    if(text){
        if(text.match(letters))
            {
            return true;
        }
        else{
            return false;
        }
    }
}