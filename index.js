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

function orderDigits(text){
    const pattern2=     /\s/g               //spaces removal pattern init
    const pattern3=     /\d{1,4}/g          //group of four digit pattern init
  //const text=         "736 4 5666 45567"  //input declaration

    muhammad = text.replace(pattern2, '')   //removing the spaces

    let test=muhammad                       //dividing into an array of 4-digit groups
    test = test.match(pattern3)

    let test1=""                            //concatenating with spaces inbetween the digit groups
    let length=test.length
    length=length - 1
    for (let x=0; x < length; x++) { 
        test1+=test[x]+' '
    } test1+=test[length]

    return test1.substring(0,19)
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
        inputNumber.value=orderDigits(inputNumber.value)
        cardNum.textContent = inputNumber.value 
        movetoNext(inputNumber,inputMM)
    } else {cardNum.textContent = `0000 0000 0000 0000`}
 
})

inputMM.addEventListener('input',function(){
    renderText(cardMM,inputMM, "MM")
    movetoNext(inputMM,inputYY)
})
inputYY.addEventListener('input',function(){
    renderText(cardYY,inputYY, "YY")
    movetoNext(inputYY, inputCVV)
})
inputCVV.addEventListener('input',function(){
    renderText(cardCVV,inputCVV, "000")
})

confirmBtn.addEventListener('click', function(event){
    if (inputName.value &&inputName.checkValidity() && inputNumber.checkValidity() && inputMM.checkValidity() && inputYY.checkValidity() && inputCVV.checkValidity()){
        event.preventDefault()
        document.getElementById('content-right').classList.add('hide')
        document.getElementById('done-div').classList.remove('hide')
    }

})
continueBtn.addEventListener('click', function(){
    window.location.reload()    
})

console.log('oya oya')
console.log(inputNumber.value)