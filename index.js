function movetoNext(current, nextFieldID) {  
    if (current.value.length >= current.maxLength) {  
    nextFieldID.focus();  
    }  
}  

function renderText(cardTextid,inputTextid, placeholder){
    if (inputTextid.value) {
        cardTextid.textContent = inputTextid.value 
        inputTextid.setAttribute("required",'');

    } else {    cardTextid.textContent = `${placeholder}`}
}

function renderNum(cardTextid,inputTextid, placeholder){
    if (inputTextid.value) {
        inputTextid.value = orderDigits(inputTextid.value) || ''
        cardTextid.textContent = inputTextid.value || `${placeholder}`
        inputTextid.setAttribute("required",'');

    } else {    cardTextid.textContent = `${placeholder}`}
}

function orderDigits(text){
    const pattern2=     /\s/g                             //spaces removal pattern init
    const pattern3=     /\d{1,4}/g                       //group of four digit pattern init

    let inputMutated= text.replace(pattern2, '')       //removing the spaces
                 
    inputMutated = inputMutated.match(pattern3)      //dividing into an array of 4-digit groups

    if (inputMutated){
        let output=""                            //concatenating with spaces inbetween the digit groups
        let length=inputMutated.length
        length=length - 1
        for (let x=0; x < length; x++) { 
            output+=inputMutated[x]+' '
        } output+=inputMutated[length]
    
        return output.substring(0,19)
    } else return                       // so as to prevent throwing an error.
}


const cardNum       =document.getElementById    ('card-num')
const cardName      =document.getElementById    ('card-name')
const cardMM        =document.getElementById    ('card-mm')
const cardYY        =document.getElementById    ('card-yy')
const cardCVV       =document.getElementById    ('card-cvv')
const inputName     =document.getElementById    ('input-name')
const inputNumber   =document.getElementById    ('input-card-number')
const inputMM       =document.getElementById    ('MM')
const inputYY       =document.getElementById    ('YY')
const inputCVV      =document.getElementById    ('CVC')
const confirmBtn    =document.getElementById    ("submit")
const continueBtn   =document.getElementById    ('continue')


inputName.addEventListener('input',function(){
    renderText(cardName,inputName, "JANE APPLESEED" )
    movetoNext(inputName, inputNumber)
})

inputNumber.addEventListener('input',function(){

    if (inputNumber.value) {
        inputNumber.setAttribute("required",'')   
        inputNumber.value=orderDigits(inputNumber.value)||''
        cardNum.textContent = inputNumber.value||'0000 0000 0000 0000'
        movetoNext(inputNumber,inputMM)
    } else {cardNum.textContent = `0000 0000 0000 0000`}
 
})

inputMM.addEventListener('input',function(){
    renderNum(cardMM,inputMM, "MM")
    movetoNext(inputMM,inputYY)
})
inputYY.addEventListener('input',function(){
    renderNum(cardYY,inputYY, "YY")
    movetoNext(inputYY, inputCVV)
})
inputCVV.addEventListener('input',function(){
    renderNum(cardCVV,inputCVV, "000")
})

confirmBtn.addEventListener('click', function(event){
    event.preventDefault()
    if (inputName.value &&inputName.checkValidity() && inputNumber.checkValidity() && inputMM.checkValidity() && inputYY.checkValidity() && inputCVV.checkValidity()){
        
        document.getElementById('content-right').classList.add('hide')
        document.getElementById('done-div').classList.remove('hide')
    }

})
continueBtn.addEventListener('click', function(){
    window.location.reload()    
})

