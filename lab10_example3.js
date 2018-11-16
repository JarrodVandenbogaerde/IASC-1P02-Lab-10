function addNumbers() {

  var string1 = document.getElementById("number1").value;
  var num1 = Number(string1);

  var string2 = document.getElementById("number2").value;
  var num2 = Number(string2);

  var answer = num1 + num2;
  
  document.getElementById("output").innerHTML = answer;
}
