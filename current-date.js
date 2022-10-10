


function getCurrentDate(){
    //getting the current date and time.
    let today = new Date();

    //extracting  the date part from the date object in the specified format and format is specified using options object.
    let options = {"weekday" : "long" , "month" : "long" , "day" : "numeric"};
    let todayDate = today.toLocaleDateString(undefined,options);
    console.log(todayDate);
    return todayDate;
}

module.exports.value = getCurrentDate();