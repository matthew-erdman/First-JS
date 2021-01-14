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
	console.log(ccDigits);

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

	formData = {
		"fname": document.getElementById("fname").value,
		"lname": document.getElementById("lname").value,
		"email": document.getElementById("email").value,
		"ssn": document.getElementById("ssn").value,
		"ccDigits": ccDigits,
		"age": age,
	}

  localStorage.setItem("formData", JSON.stringify(formData));

  console.log("---------logging---------");
  console.log(JSON.parse(localStorage.getItem("formData")));
  console.log("Name: ", formData["fname"], formData["lname"]);
  console.log("Email: ", formData["email"]);
  console.log("SSN: ", formData["ssn"]);
  console.log("CC: ", formData["ccDigits"]);
  console.log("Age: ", formData["age"]);

  // Replaces old form with new confirmation form
  myDiv.innerHTML = "\n";
  myDiv.innerHTML += "\t\t<h1>free robux time yes almost</h1>\n";
  myDiv.innerHTML += "\t\t<p>" + "Hello, " + formData["fname"] + " " + formData["lname"] + " - age " + formData["age"] + "!" + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Please confirm your SSN of:  " + formData["ssn"] + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Please confirm your email of:  " + formData["email"] + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "And ensure your credit card has the digits: " + formData["ccDigits"] + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p><button onclick='robux()'>confirm details for free robux! mhmmm yes</button></p>";

  // Download formData JSON
  // https://developer.mozilla.org/en-US/docs/Web/API/Blob
  var blob = new Blob([JSON.stringify(formData)], {type : "application/json"});
  var url = URL.createObjectURL(blob)
  myDiv.innerHTML += "\t\t<a href=" + url + " download='formData.json'><button>Download <s>my</s> our data</button></a>";
}

// Add image when confirm button is clicked, nothing is replaced
function robux() {
  myDiv.innerHTML += "\t\t<img src='robux.gif' alt='robux dab' />";
}
