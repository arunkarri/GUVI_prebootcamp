var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
    // if ('0') => leads to true because the value inside string is not empty
    // hence 'hi' is appended to the variable msg
 msg += "hi";
 }
if (lemeout) {
    //if (0) => leads to false. So this condition doesn't pass
 msg += 'Hello';
}
console.log(msg);