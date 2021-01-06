myDiv = document.getElementById("myDiv");
console.log(myDiv);

function myClick() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var ssn = document.getElementById("ssn").value;
  var cc = [
   document.getElementById("cc0").checked, document.getElementById("cc1").checked,
   document.getElementById("cc2").checked, document.getElementById("cc3").checked,
   document.getElementById("cc4").checked, document.getElementById("cc5").checked,
   document.getElementById("cc6").checked, document.getElementById("cc7").checked,
   document.getElementById("cc8").checked, document.getElementById("cc9").checked];
  var ccDigits = [];
  var age;

  for (digit in cc) {
    if (cc[digit]) {
      ccDigits.push(digit);
    }
  }

  if (document.getElementById("age14").checked) {
    age = "fourteen";
  }
  else if (document.getElementById("age15").checked) {
    age = "fifteen";
  }
  else if (document.getElementById("age16").checked) {
    age = "sixteen";
  }
  else if (document.getElementById("old").checked) {
    age = "old";
  }

  console.log(fname, lname);
  console.log(ssn);
  console.log(ccDigits);
  console.log(age);

  myDiv.innerHTML = "\n";
  myDiv.innerHTML += "\t\t<h1>free robux time yes almost</h1>\n"
  myDiv.innerHTML += "\t\t<p>" + "Hello, " + fname + " " + lname + " - age " + age + "!" + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Please confirm your SSN of:  " + ssn + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "And ensure your credit card has the digits: " + ccDigits + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p><button onclick='robux()'>Confirm details for free robux! mhmmm yes</button></p>"
}

function robux() {
  myDiv.innerHTML += "\t\t<img src='robux.gif' alt='robux dab' />"
}
