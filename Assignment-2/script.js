// $('#buttom').click(function() {
//     // name field
//     if ($('#name').val() == "") {
//         $('#errorname').show();
//     } else {
//         $('#errorname').hide();
//     }
//     // msg field
//     if ($('#msg').val() == "") {
//         $('#errormsg').show();
//     } else {
//         $('#errormsg').hide();
//     }
// })
var i = 1;
var t;
function staticsdb() {
    var uname = document.getElementById('User Name').value;;
    var uemail = document.getElementById('Email').value;;
    var umsg = document.getElementById('msg').value;;
    let tempN = uname;
    let tempE = uemail;
    let tempM = umsg + "<br>";
    let tempS = i + "   ";

    if (i == 1) {
        t = tempS + tempN + tempE + tempM;
        // t=i+" | "+uname+" | "+uemail+" | "+umsg +"<br>";
        document.getElementById('row').innerHTML = t;
    } else {
        t += tempS + tempN + tempE + tempM;
        // t+=i+" | "+uname+" | "+uemail+" | "+umsg+"<br>";
        document.getElementById('row').innerHTML = t;
    }
    i++;
}
