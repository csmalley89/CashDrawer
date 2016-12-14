<script language="javascript">

function perRound(num, precision) {

  var precision = 3; //default value if not passed from caller, change if desired

  // remark if passed from caller

  precision = parseInt(precision); // make certain the decimal precision is an integer

    var result1 = num * Math.pow(10, precision);

    var result2 = Math.round(result1);

    var result3 = result2 / Math.pow(10, precision);

    return zerosPad(result3, precision);

}



function zerosPad(rndVal, decPlaces) {

    var valStrg = rndVal.toString(); // Convert the number to a string

    var decLoc = valStrg.indexOf("."); // Locate the decimal point

    // check for a decimal

    if (decLoc == -1) {

        decPartLen = 0; // If no decimal, then all decimal places will be padded with 0s

        // If decPlaces is greater than zero, add a decimal point

        valStrg += decPlaces > 0 ? "." : "";

    }

    else {

        decPartLen = valStrg.length - decLoc - 1; // If there is a decimal already, only the needed decimal places will be padded with 0s

    }

     var totalPad = decPlaces - decPartLen;    // Calculate the number of decimal places that need to be padded with 0s

    if (totalPad > 0) {

        // Pad the string with 0s

        for (var cntrVal = 1; cntrVal <= totalPad; cntrVal++)

            valStrg += "0";

        }

    return valStrg;

}

// clears field of default value

function clear_field(field) {

    if (field.value==field.defaultValue) {

      field.value=''

    }

  }


function s(num, val) {
amount = num * 1; // amount is the num or NaN
sum = (!num ? 0 : num) * val;  // the sum for that bill or coin

if (isNaN(amount)) { // if the entire is not a number

alert(
"' " + num + " ' is not a valid entry and that field will "
+ "not be included in the total money calculation."
);

return 0;
}
else
return sum; // if it is OK, send sum back
}

function money(form) {
hun = s(form.hun.value, 100); // Each amount is the returned value
fif = s(form.fif.value, 50);  // for the amount in the s() function
twe = s(form.twe.value, 20);
ten = s(form.ten.value, 10);
fiv = s(form.fiv.value, 5);
two = s(form.two.value, 2);
one = s(form.one.value, 1);
sdol = s(form.sdol.value, 1);
hlf = s(form.hlf.value, .5);
qtr = s(form.qtr.value, .25);
dme = s(form.dme.value, .1);
nck = s(form.nck.value, .05);
pny = s(form.pny.value, .01);

// add up all the amounts
var ttl = hun + fif + twe + ten + fiv
+ two + one + sdol + hlf + qtr + dme + nck + pny;

// add up all the bills
var bills = (form.hun.value *1) + (form.fif.value *1) + (form.twe.value *1) + (form.ten.value *1) + (form.fiv.value *1) + (form.two.value *1) + (form.one.value *1);

// add up all the coins
var coins = (form.sdol.value *1) + (form.hlf.value *1) + (form.qtr.value *1) + (form.dme.value *1) + (form.nck.value *1) + (form.pny.value *1);

// rounds total to two decimal places

ttl = "" + ((Math.round(ttl * 100)) / 100);

dec1 = ttl.substring(ttl.length-3, ttl.length-2);
dec2 = ttl.substring(ttl.length-2, ttl.length-1);

if (dec1 != '.') { // adds trailing zeroes if necessary
if (dec2 == '.') ttl += "0";
else ttl += ".00";
}
form.total.value = "$ " + ttl; // display total amount
form.bills.value = bills; // display total quantity bills
form.coins.value = coins; // display total quantity coins
}
//  -->
</script>

