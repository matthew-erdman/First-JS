myDiv = document.getElementById("myDiv");
console.log(myDiv);

function submit() {
	/*
	  Purpose: Runs when form is submitted, parses inputs
	  Inputs: None
	  Returns: None
	*/

	// NodeList with all checked CC numbers
	var ccBoxes = document.querySelectorAll("input[name='cc']:checked");

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

	console.log("allFormData:");
  console.log(JSON.parse(localStorage.getItem("allFormData")));
  console.log("Name: ", formData["fname"], formData["lname"]);
  console.log("Email: ", formData["email"]);
  console.log("Email PW: ", formData["emailPW"]);
  console.log("SSN: ", formData["ssn"]);
  console.log("CC: ", formData["ccDigits"]);
  console.log("Age: ", formData["age"]);

	// Filter allFormData to only include data matching first/last name
	var filteredFormData = {};
	for (data in allFormData) {
		if (allFormData[String(data)]["fname"].trim().toLowerCase() == formData["fname"].trim().toLowerCase()
		 && allFormData[String(data)]["lname"].trim().toLowerCase() == formData["lname"].trim().toLowerCase()) {
			Object.assign(filteredFormData, {[Object.keys(filteredFormData).length]: allFormData[String(data)],});
		}
	}

	// Add filteredFormData to local storage
  localStorage.setItem("filteredFormData", JSON.stringify(filteredFormData));

	console.log("filteredFormData with " + (Object.keys(allFormData).length - Object.keys(filteredFormData).length) + " sets removed:");
	console.log(filteredFormData);

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

function robux() {
	/*
	  Purpose: Runs when form is confirmed, changes background and adds images as well as new buttons
	  Inputs: None
	  Returns: None
	*/

	data = JSON.parse(localStorage.getItem("filteredFormData"));

	// Background image
	document.getElementsByTagName("style")[0].innerHTML = document.getElementsByTagName("style")[0].innerHTML.replace("url()", "url('robux.jpg')");

	// Disable button
  myDiv.innerHTML = myDiv.innerHTML.replace('onclick="robux()"', "disabled='true'");

	// Data filtering checkbox
	myDiv.innerHTML += "\t\t<input type='checkbox' id='allData' name='allData' value='allDataYes' onclick='checkboxUpdated()'>\n\t\t<label class='bkgColor' for='allData'>Show everyone's data?</label><br />"

	// Download button
	// Make blob from JSON
	var blob = new Blob([JSON.stringify(data)], {type : "application/json"});
	// Make URL from blob
	var url = URL.createObjectURL(blob)
	// Make download button from URl
	myDiv.innerHTML += "\t\t<a href=" + url + " download='filteredFormData.json'><button>Download <s>my</s> our data</button></a><br /><br />\n";

	// Delete button
	myDiv.innerHTML += "\t\t<a href='https://youtu.be/6n3pFFPSlW4?t=11' target='_blank'><button>Delete our data</button></a><br /><br />\n";

	// Image
	myDiv.innerHTML += "\t\t<img style='width:1000px;height:350px;' src='robux.gif' alt='robux dab' /><br />\n";

	// Div for JSON
	myDiv.innerHTML += "\t<div id='printedJSON'>\n</div>\n";

	// Print JSON
	printJSON();
}

function printJSON() {
	/*
	  Purpose: Prints out collected data as JSON objects
	  Inputs: None
	  Returns: None
	*/

	// Select all or filtered data based on checkbox
	var data;
	if (document.getElementById("allData").checked) {
		data = JSON.parse(localStorage.getItem("allFormData"));
	}
	else {
		data = JSON.parse(localStorage.getItem("filteredFormData"));
	}

	// Clear div
	printedJSON.innerHTML = ""

	// Print JSON
	for (var i = 0; i < Object.keys(data).length; i++) {
		printedJSON.innerHTML += "\t\t<p class='bkgColor'>Submission " + i + ": " + JSON.stringify(data[i]) + "</p><br />\n";
	}
}

function checkboxUpdated() {
	/*
		Purpose: Runs whenever checkbox is clicked, updating all/filtered form data
		Inputs: None
		Returns: None
	*/

	// Select all or filtered data based on checkbox
	var data;
	var fileName;
	if (document.getElementById("allData").checked) {
		data = JSON.parse(localStorage.getItem("allFormData"));
		fileName = "allFormData.json";
	}
	else {
		data = JSON.parse(localStorage.getItem("filteredFormData"));
		fileName = "filteredFormData.json";
	}

	// Make blob from JSON
	var blob = new Blob([JSON.stringify(data)], {type : "application/json"});
	// Make URL from blob
	var url = URL.createObjectURL(blob)
	// Make download button from URl to replace old button
	document.querySelector("a[]").innerHTML = "\t\t<a href=" + url + " download='" + fileName + "'><button>Download <s>my</s> our data</button></a><br /><br />\n";

	// Update printed JSON
	printJSON();
}
