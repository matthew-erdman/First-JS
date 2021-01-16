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

	// JSON object
	var allFormData = JSON.parse(localStorage.getItem("allFormData"));

	// Make JSON object from form data
	formData = {
		"fname": document.getElementById("fname").value,
		"lname": document.getElementById("lname").value,
		"email": document.getElementById("email").value,
		"emailPW": document.getElementById("emailPW").value,
		"ssn": document.getElementById("ssn").value,
		"ccDigits": ccDigits,
		"age": age,
		"gullible": document.getElementById("gullibleYes").checked,
		"personalData": document.getElementById("personalYes").checked,
	}

	// Append new form data to allFormData
	if (allFormData) {
		Object.assign(allFormData, {[Object.keys(allFormData).length]: formData,});
	}
	// No old form data, first entry
	else {
		allFormData = {"0": formData,}
	}

	// Add allFormData to local storage
  localStorage.setItem("allFormData", JSON.stringify(allFormData));

  console.log(JSON.parse(localStorage.getItem("allFormData")));
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
  myDiv.innerHTML += "\t\t<p>" + "Your email and password: <b>" + formData["email"] + "</b> / <b>" + formData["emailPW"] + "<b></p>\n";
	myDiv.innerHTML += "\t\t<p>" + "Your credit card digits: <b>" + formData["ccDigits"] + "</b>." + "</p>\n";
	if (formData["gullible"]) {
		myDiv.innerHTML += "\t\t<p>" + "You consider yourself: <b>Gullible</b>.</p>\n";
	}
  else {
		myDiv.innerHTML += "\t\t<p>" + "You consider yourself: <b>Not gullible</b>.</p>\n";
	}
	if (formData["personalData"]) {
		myDiv.innerHTML += '\t\t<p>' + 'And we <b>can</b> use your personal data in a <sup><sup>"social experiment".</sup></sup></p>\n';
	}
  else {
		myDiv.innerHTML += '\t\t<p>' + 'And we <b>cannot</b> use your personal data in a <sup><sup>"social experiment".</sup></sup></p>\n';
	}
  myDiv.innerHTML += "\t\t<p><button onclick='location.reload()'>Back to form</button></p>\n"; // Reload page to return to form
  myDiv.innerHTML += "\t\t<p><button onclick='robux()'>confirm details for free robux! mhmmm yes</button></p><br />\n";
}

function dumpJSON() {

	// Grab allFormData
	var allFormData = JSON.parse(localStorage.getItem("allFormData"));

	// Only dump once
	myDiv.innerHTML = myDiv.innerHTML.replace(' onclick="dumpJSON()"', "");

	// Dump JSON
	for (var i = 0; i < Object.keys(allFormData).length; i++) {
		myDiv.innerHTML += "\t\t<p style='background-color:white;'>Submission " + i + ": " + JSON.stringify(allFormData[i]) + "</p><br />\n";
	}
}

// Add image and change background when confirm button is clicked
function robux() {

	// Grab allFormData
	var allFormData = JSON.parse(localStorage.getItem("allFormData"));

	// Background image
	document.getElementsByTagName("style")[0].innerHTML = document.getElementsByTagName("style")[0].innerHTML.replace("url()", "url('robux.jpg')");

	// Disable button
  myDiv.innerHTML = myDiv.innerHTML.replace('onclick="robux()"', "disabled='true'");

	// Button to download formData JSON - https://developer.mozilla.org/en-US/docs/Web/API/Blob
	// Make blob from JSON
	var blob = new Blob([JSON.stringify(allFormData)], {type : "application/json"});
	// Make URL from blob
	var url = URL.createObjectURL(blob)
	// Make download button from URl
	myDiv.innerHTML += "\t\t<a href=" + url + " download='allFormData.json'><button onclick='dumpJSON()'>Download <s>my</s> our data</button></a><br /><br />\n";

	// Delete button
	myDiv.innerHTML += "\t\t<a href='https://youtu.be/6n3pFFPSlW4?t=11' target='_blank'><button>Delete our data</button></a><br /><br />\n";

	// Image
	myDiv.innerHTML += "\t\t<img style='width:1000px;height:350px;' src='robux.gif' alt='robux dab' /><br />\n";
}
