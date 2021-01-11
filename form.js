myDiv = document.getElementById("myDiv");
console.log(myDiv);

function myClick() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var ssn = document.getElementById("ssn").value;
  // List of booleans showing checked CC numbers
  var cc = [
   document.getElementById("cc0").checked, document.getElementById("cc1").checked,
   document.getElementById("cc2").checked, document.getElementById("cc3").checked,
   document.getElementById("cc4").checked, document.getElementById("cc5").checked,
   document.getElementById("cc6").checked, document.getElementById("cc7").checked,
   document.getElementById("cc8").checked, document.getElementById("cc9").checked];
  var ccDigits = [];
  var age;

  // Generate list of actual CC numbers from list of booleans
  for (digit in cc) {
    if (cc[digit]) {
      ccDigits.push(digit);
    }
  }

  // Age, lowest is used if multiple are checked
  if (document.getElementById("age14").checked) {
    age = "fourteen";
  }
  else if (document.getElementById("age15").checked) {
    age = "fifteen";
  }
  else if (document.getElementById("age16").checked) {
    age = "sixteen";
  }
  else if (document.getElementById("boomer").checked) {
    age = "boomer";
  }

  console.log(fname, lname);
  console.log(ssn);
  console.log(ccDigits);
  console.log(age);

  // Replaces old form with new confirmation form
  myDiv.innerHTML = "\n";
  myDiv.innerHTML += "\t\t<h1>free robux time yes almost</h1>\n"
  myDiv.innerHTML += "\t\t<p>" + "Hello, " + fname + " " + lname + " - age " + age + "!" + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Please confirm your SSN of:  " + ssn + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "And ensure your credit card has the digits: " + ccDigits + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p><button onclick='robux()'>Confirm details for free robux! mhmmm yes</button></p>"
}

// Add image when confirm button is clicked, nothing is replaced
function robux() {
  myDiv.innerHTML += "\t\t<img src='robux.gif' alt='robux dab' />"
}
