//onClick funktion ohne paramenter
function myFunction() {
    alert("Hello World")
}
//onClick funktion mit parameter
function myFunctionWithParam(name) {
    alert('Hi ' + name);
}

//function Wert entgegennehmen und in eine Element hinzufügen
function insert() {
   var fname = document.getElementById("firstname").value;
   document.getElementById("myParagraph").innerHTML = fname;
}