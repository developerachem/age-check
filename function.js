// Input Form Date Function
let date = new Date;

function ageCal (name , year){
    const age = date.getFullYear() - year;
    const jubok = statusCheck(age)
    return `<p class="alert-${jubok.style} alert text-left" > Hello ${name} You Aren ${age} Years Old And You Are ${jubok.status} </p>` 
}

function statusCheck (age) {
    if( age >= 0 && age < 18 ){
        return{
            status : 'You Are Bacca',
            style  : 'success'
        }
    }else if( age >= 18 && age < 30 ){
        return{
            status : 'You Are Jubok',
            style  : 'primary'
        }
    }else if( age >= 30 && age < 45 ){
        return{
            status : 'You Are Boyosko',
            style  : 'warning'
        }
    }
    else if( age >= 45 && age <= 100 ){
        return{
            status : 'You Are Briddho',
            style  : 'danger'
        }
    }else{
        return{
            status : 'You Are Jin / Vut',
            style  : 'dark'
        }
    }
}

