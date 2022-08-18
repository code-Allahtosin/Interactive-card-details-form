function movetoNext(current, nextFieldID) {  
    if (current.value.length >= current.maxLength) {  
    nextFieldID.focus();  
    }  
}  

function renderText(cardTextid,inputTextid, placeholder){
    if (inputTextid.value) {
    cardTextid.textContent = inputTextid.value 
    } else {    cardTextid.textContent = `${placeholder}`}
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
    
    let xi=inputNumber.value.length

    inputNumber.onkeydown = function() {
        let key = event.keyCode || event.charCode;
        if( key !== 8){
            if (xi === 4 || xi === 9 || xi === 14) {
                inputNumber.value += " ";
            }
            cardNum.textContent = inputNumber.value
            movetoNext(inputNumber,inputMM)
    }}

    renderText(cardNum,inputNumber, "0000 0000 0000 0000")    
    movetoNext(inputNumber,inputMM)
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
    if (inputName.checkValidity() && inputNumber.checkValidity() && inputMM.checkValidity() && inputYY.checkValidity() && inputCVV.checkValidity()){
        event.preventDefault()
        document.getElementById('content-right').classList.add('hide')
        document.getElementById('done-div').classList.remove('hide')
    }

})
continueBtn.addEventListener('click', function(){
    window.location.reload()    
})


