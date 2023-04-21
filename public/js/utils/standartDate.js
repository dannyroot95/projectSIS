
function date(st){

    let date = new Date(st);
    /* Date format you have */
    let day = date.getDate()
    let month = date.getMonth() + 1

    if(day.toString().length == 1){
        day = '0'+day.toString()
    }if(month.toString().length == 1){
        month = '0'+month.toString()
    }

    let dateMDY = `${day}-${month}-${date.getFullYear()}`;
    return dateMDY

}