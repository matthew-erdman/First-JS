myDiv = document.getElementById("myDiv");
console.log(myDiv);

function myClick() {

	// List with all checked CC numbers
	var ccBoxes = document.querySelectorAll("input[name='cc']:checked");
	console.log(ccBoxes.length);
	console.log(ccBoxes);

	// Generate list of actual CC numbers from list of boxes
	var ccDigits = [];
	// for (box in ccBoxes) {
  //  ccDigits.push(box.value);
	// 	console.log(box);
	// 	console.log(box.value);
  // }
	for (var box; box++; box < 2) {
		console.log("aaa" + ccBoxes[box].value);
		ccDigits.push(ccBoxes[box].value);
	}
	console.log(ccDigits);

  // Age
	var age;
  if (document.getElementById("age14").checked) {
    age = "fourteen";
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

	myJSON = {
		"fname": document.getElementById("fname").value,
		"lname": document.getElementById("lname").value,
		"ssn": document.getElementById("ssn").value,
		"ccDigits": ccDigits,
		"age": age,
	}

  console.log(myJSON["fname"], myJSON["lname"]);
  console.log(myJSON["ssn"]);
  console.log(myJSON["ccDigits"]);
  console.log(myJSON["age"]);

  // Replaces old form with new confirmation form
  myDiv.innerHTML = "\n";
  myDiv.innerHTML += "\t\t<h1>free robux time yes almost</h1>\n"
  myDiv.innerHTML += "\t\t<p>" + "Hello, " + myJSON["fname"] + " " + myJSON["lname"] + " - age " + myJSON["age"] + "!" + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "Please confirm your SSN of:  " + myJSON["ssn"] + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p>" + "And ensure your credit card has the digits: " + myJSON["ccDigits"] + "." + "</p>\n";
  myDiv.innerHTML += "\t\t<p><button onclick='robux()'>Confirm details for free robux! mhmmm yes</button></p>"
}

// Add image when confirm button is clicked, nothing is replaced
function robux() {
  myDiv.innerHTML += "\t\t<img src='robux.gif' alt='robux dab' />"
}
