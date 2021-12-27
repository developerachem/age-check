const ageCheckName = document.getElementById('name');
const ageCheckYear = document.getElementById('year');
const ageCheckBtn = document.getElementById('button');
const ageCheckAns = document.getElementById('answor');


ageCheckBtn.addEventListener('click' , function(){
    if( ageCheckName.value == "" || ageCheckYear.value == "" ){
        return ageCheckAns.innerHTML = `<p class=" alert alert-danger">All files are required</p> `
    }else{
        ageCheckAns.innerHTML = (ageCheck(ageCheckName.value , ageCheckYear.value))
        ageCheckName.value = ""
        ageCheckYear.value = ""
        ageCheckBtn.innerHTML = ('Done')
    }
})
ageCheckName.addEventListener('click', ( ) => {
    ageCheckAns.innerHTML = ('')
})
ageCheckYear.addEventListener('click', ( ) => {
    ageCheckAns.innerHTML = ('')
})



