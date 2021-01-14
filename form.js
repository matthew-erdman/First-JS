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
  myDiv.innerHTML = "";
  myDiv.innerHTML += "\t\t<h1>free robux time yes almost</h1>\n";
  myDiv.innerHTML += "\t\t<p>" + "Hello, <b>" + formData["fname"] + "</b> <b>" + formData["lname"] + "</b> - age <b>" + formData["age"] + "</b>!" + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Please confirm your SSN of:  <b>" + formData["ssn"] + "</b>." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Please confirm your email of:  <b>" + formData["email"] + "</b>." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "And ensure your credit card has the digits: <b>" + formData["ccDigits"] + "</b>." + "</p>\n";
  myDiv.innerHTML += "\t\t<p><button onclick='robux()'>confirm details for free robux! mhmmm yes</button></p>\n";

  // Download formData JSON button
  // https://developer.mozilla.org/en-US/docs/Web/API/Blob
  var blob = new Blob([JSON.stringify(formData)], {type : "application/json"});
  var url = URL.createObjectURL(blob)
  myDiv.innerHTML += "\t\t<a href=" + url + " download='formData.json'><button>Download <s>my</s> our data</button></a><br /><br />\n";
  myDiv.innerHTML += "\t\t<a href='https://youtu.be/6n3pFFPSlW4' target='_blank'><button>Delete our data</button></a><br /><br />\n";
}

// Add image and change background when confirm button is clicked
function robux() {
  myDiv.innerHTML += "\t\t<img width=" + window.innerWidth + " height='500' src='robux.gif' alt='robux dab' /><br />\n";
  myDiv.innerHTML = myDiv.innerHTML.replace('onclick="robux()"', "disabled='true'")
  document.getElementsByTagName("style")[0].innerHTML = document.getElementsByTagName("style")[0].innerHTML.replace("url()", "url('robux.jpg')")
}
