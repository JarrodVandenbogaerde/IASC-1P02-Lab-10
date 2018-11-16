var age = prompt("What is your age?");

var start = new Date();
var current = start.getFullYear();
var birth = current - age;

document.getElementById("output").innerHTML = birth;
