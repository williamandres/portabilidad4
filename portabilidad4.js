let simCardOption1 = document.getElementById('simcard-option1');
let simCardOption2 = document.getElementById('simcard-option2');

let option1IconLineBlue = document.getElementById('simcard-option1-icon-line-blue');
let option1IconLineWhite = document.getElementById('simcard-option1-icon-line-white');

let option2IconLineBlue = document.getElementById('simcard-option2-icon-line-blue');
let option2IconLineWhite = document.getElementById('simcard-option2-icon-line-white');

let simCardForm = document.getElementById('simcard-form')
let simCardForm2 = document.getElementById('simcard-form2')

let simCardbutton = document.getElementById('simcard-button')

// *************************** Sim Card Option 1 ******************************

simCardOption1.addEventListener('click', reciveDelivery)

function reciveDelivery()
{
    simCardOption1.classList.remove('simcard-option-transparent');
    simCardOption1.classList.add('simcard-option-blue');
    simCardOption2.classList.remove('simcard-option-blue');
    simCardOption2.classList.add('simcard-option-transparent');
    
    option1IconLineBlue.classList.add('display-none');
    option1IconLineWhite.classList.remove('display-none');
    option2IconLineWhite.classList.add('display-none');
    option2IconLineBlue.classList.remove('display-none'); 
    
    simCardForm.classList.remove('display-none');
    simCardForm2.classList.add('display-none');

}

// *************************** /Sim Card Option 1 ******************************




// *************************** Sim Card Option 2 ******************************

 simCardOption2.addEventListener('click', getShop);

 function getShop()
 {
     simCardOption2.classList.remove('simcard-option-transparent');
     simCardOption2.classList.add('simcard-option-blue');
     simCardOption1.classList.remove('simcard-option-blue');
     simCardOption1.classList.add('simcard-option-transparent');

     option2IconLineWhite.classList.remove('display-none');
     option2IconLineBlue.classList.add('display-none');  
     option1IconLineBlue.classList.remove('display-none');
     option1IconLineWhite.classList.add('display-none');
 }

// *************************** /Sim Card Option 2 ******************************




// *************************** Sim Card Option 1/ screen 2  ******************************

simCardbutton.addEventListener('click', screen2);

function screen2()
{
    simCardForm2.classList.remove('display-none');
    simCardForm.classList.add('display-none');
}