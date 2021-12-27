// Taim Function
const date = new Date;


/**
 * This Is Age Calculetor
 */
function ageCheck (name , year){

    

    let age = date.getFullYear() - year ;
    let bibaho = marageCal(age);
    return `<p class=" alert alert-${bibaho.style}">Hello ${name} You Are ${age} Year Old And Your ${bibaho.name} </p>`

}


function marageCal (age){

    if( age >= 0 && age < 18 ){
        return {
            name : 'You Are Bacca',
            style : 'success'
        };
    }else if( age >= 18 && age < 28 ){
        return {
            name : 'You Are Jubok',
            style : 'info'
        };
    }else if( age >= 28 && age < 45 ){
        return {
            name : 'You Are Yeong',
            style : 'warning'
        };
    }else {
        return {
            name : 'You Are Bura',
            style : 'dark'
        };
    }
}