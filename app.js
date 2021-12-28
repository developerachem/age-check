// Input Form HTML
const formName = document.getElementById('name');
const nameMassage = document.getElementById('name-massage');

const formYear = document.getElementById('year');
const yearMassage = document.getElementById('year-massage');

const button = document.getElementById('button');
const massage = document.getElementById('massage');

formName.addEventListener('keydown', () => {
    nameMassage.innerHTML = "";
    massage.innerHTML = '';
    button.value = 'Submit';
})
formYear.addEventListener('keydown', () => {
    yearMassage.innerHTML = "";
    massage.innerHTML = '';
    button.value = 'Submit';
})

button.addEventListener('click', () => {
    if (formName.value === "") {
        nameMassage.innerHTML = "* Name Required ";
    } else if (/^[0-9]{4}$/.test(formYear.value) === false) {
        yearMassage.innerHTML = "* Type Birth Year in 4 Digit";
    } else {
        massage.innerHTML = ageCal(formName.value , formYear.value)
        formName.value = "";
        formYear.value = "";
        button.value = 'OK';
    }
  
    
})