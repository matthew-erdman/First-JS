myDiv = document.getElementById("myDiv");
console.log(myDiv);

function myClick() {
  localStorage.setItem("fname", document.getElementById("fname").value);
  localStorage.setItem("lname", document.getElementById("lname").value);
  localStorage.setItem("ssn", document.getElementById("ssn").value);

  // List of booleans showing checked CC numbers
  var cc = [
   document.getElementById("cc0").checked, document.getElementById("cc1").checked,
   document.getElementById("cc2").checked, document.getElementById("cc3").checked,
   document.getElementById("cc4").checked, document.getElementById("cc5").checked,
   document.getElementById("cc6").checked, document.getElementById("cc7").checked,
   document.getElementById("cc8").checked, document.getElementById("cc9").checked];

  // Generate list of actual CC numbers from list of booleans
	var ccDigits = [];
  for (digit in cc) {
    if (cc[digit]) {
      ccDigits.push(digit);
    }
  }
	localStorage.setItem("ccDigits", ccDigits);

  // Age
  if (document.getElementById("age14").checked) {
    localStorage.setItem("age", "fourteen");
  }
  else if (document.getElementById("age15").checked) {
    localStorage.setItem("age", "fifteen");
  }
  else if (document.getElementById("age16").checked) {
    localStorage.setItem("age", "sixteen");
  }
  else if (document.getElementById("boomer").checked) {
    localStorage.setItem("age", "boomer");
  }

  console.log(localStorage.getItem("fname"), localStorage.getItem("lname"));
  console.log(localStorage.getItem("ssn"));
  console.log(localStorage.getItem("ccDigits"));
  console.log(localStorage.getItem("age"));

  // Replaces old form with new confirmation form
  myDiv.innerHTML = "\n";
  myDiv.innerHTML += "\t\t<h1>free robux time yes almost</h1>\n"
  myDiv.innerHTML += "\t\t<p>" + "Hello, " + localStorage.getItem("fname") + " " + localStorage.getItem("lname") + " - age " + localStorage.getItem("age") + "!" + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Please confirm your SSN of:  " + localStorage.getItem("ssn") + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "And ensure your credit card has the digits: " + localStorage.getItem("ccDigits") + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p><button onclick='robux()'>Confirm details for free robux! mhmmm yes</button></p>"
}

// Add image when confirm button is clicked, nothing is replaced
function robux() {
  myDiv.innerHTML += "\t\t<img src='robux.gif' alt='robux dab' />"
}
