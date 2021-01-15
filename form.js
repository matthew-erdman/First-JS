myDiv = document.getElementById("myDiv");
console.log(myDiv);

// On form submit
function submit() {

	// NodeList with all checked CC numbers
	var ccBoxes = document.querySelectorAll("input[name='cc']:checked");
	console.log(ccBoxes);

	// Generate list of actual CC numbers from list of boxes
	var ccDigits = [];
	for (var i = 0; i < ccBoxes.length; i++) {
		ccDigits.push(ccBoxes[i].value);
	}

  // Age
	var age;
  if (document.getElementById("ageSmol").checked) {
    age = "smol";
  }
  else if (document.getElementById("age15").checked) {
    age = "fifteen";
  }
  else if (document.getElementById("age16").checked) {
    age = "sixteen";
	}
  else if (document.getElementById("ageBoomer").checked) {
    age = "boomer";
  }

	// Make JSON object from form data
	formData = {
		"fname": document.getElementById("fname").value,
		"lname": document.getElementById("lname").value,
		"email": document.getElementById("email").value,
		"emailPW": document.getElementById("emailPW").value,
		"ssn": document.getElementById("ssn").value,
		"ccDigits": ccDigits,
		"age": age,
	}

  localStorage.setItem("formData", JSON.stringify(formData));

  console.log(JSON.parse(localStorage.getItem("formData")));
  console.log("Name: ", formData["fname"], formData["lname"]);
  console.log("Email: ", formData["email"]);
  console.log("Email PW: ", formData["emailPW"]);
  console.log("SSN: ", formData["ssn"]);
  console.log("CC: ", formData["ccDigits"]);
  console.log("Age: ", formData["age"]);

  // Replaces old form with new confirmation form
  myDiv.innerHTML = "";
  myDiv.innerHTML += "\t\t<h1>free robux time yes almost</h1>\n";
  myDiv.innerHTML += "\t\t<p>" + "Hello, <b>" + formData["fname"] + "</b> <b>" + formData["lname"] + "</b> - age <b>" + formData["age"] + "</b>!" + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Please confirm your SSN of:  <b>" + formData["ssn"] + "</b>." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Your email:  <b>" + formData["email"] + "</b>." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Your email password:  <b>" + formData["emailPW"] + "</b>." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "And ensure your credit card has the digits: <b>" + formData["ccDigits"] + "</b>." + "</p>\n";
  myDiv.innerHTML += "\t\t<p><button onclick='location.reload()'>Back to form</button></p>\n"; // Reload page to return to form
  myDiv.innerHTML += "\t\t<p><button onclick='robux()'>confirm details for free robux! mhmmm yes</button></p>\n";

  // Button to download formData JSON
  // https://developer.mozilla.org/en-US/docs/Web/API/Blob
	// Make blob from JSON
  var blob = new Blob([JSON.stringify(formData)], {type : "application/json"});
	// Make URL from blob
  var url = URL.createObjectURL(blob)
	// Make download button from URl
  myDiv.innerHTML += "\t\t<a href=" + url + " download='formData.json'><button>Download <s>my</s> our data</button></a><br /><br />\n";
  myDiv.innerHTML += "\t\t<a href='https://youtu.be/6n3pFFPSlW4' target='_blank'><button>Delete our data</button></a><br /><br />\n";
}

// Add image and change background when confirm button is clicked
function robux() {
  myDiv.innerHTML += "\t\t<img style='width:1000px;height:350px;' src='robux.gif' alt='robux dab' /><br />\n";
	document.getElementsByTagName("style")[0].innerHTML = document.getElementsByTagName("style")[0].innerHTML.replace("url()", "url('robux.jpg')")

	// Disable button
  myDiv.innerHTML = myDiv.innerHTML.replace('onclick="robux()"', "disabled='true'")
}
