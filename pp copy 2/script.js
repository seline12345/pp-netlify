var number = 0
var score = 0
var name = ""
var names = []
var scores = []
function check_answer(btn_number) {
	var status = false
	if (btn_number == 1 && number == 1) {
			status = true
	}
	else if (btn_number == 1 && number == 2) {
			status = true	
	}
	else if (btn_number == 1 && number == 3) {
			status = true
	}
	else if (btn_number == 1 && number == 4) {
			status = true
	}
	else if (btn_number == 2 && number == 5) {
			status = true
	}
	else if (btn_number == 2 && number == 6) {
			status = true
	}
	else if (btn_number == 3 && number == 7) {
			status = true
	}
	else if (btn_number == 3 && number == 8) {
			status = true
	}
	else if (btn_number == 4 && number == 9) {
			status = true
	}
	else if (btn_number == 4 && number == 10) {
			status = true
	}
	else if (btn_number == 5 && number == 11) {
			status = true
	}
	else if (btn_number == 5 && number == 12) {
			status = true
	}
	else if (btn_number == 6 && number == 13) {
			status = true
	}
	else if (btn_number == 6 && number == 14) {
			status = true
	}
	else if (btn_number == 7 && number == 15) {
			status = true
	}
	else if (btn_number == 7 && number == 16) {
			status = true
	}
	else {
			status = false
			if (number == 1 || number == 2 || number == 3 || number == 4) {
					document.getElementById("button1").style.backgroundColor = "green"
			}
			else if (number == 5 || number == 6) {
					document.getElementById("button2").style.backgroundColor = "green"
			}
			else if (number == 7 || number == 8) {
					document.getElementById("button3").style.backgroundColor = "green"
			}
			else if (number == 9 || number == 10) {
					document.getElementById("button4").style.backgroundColor = "green"
			}
			else if (number == 11 || number == 12) {
					document.getElementById("button5").style.backgroundColor = "green"
			}
			else if (number == 13 || number == 14) {
					document.getElementById("button6").style.backgroundColor = "green"
			}
			else if (number == 15 || number == 16) {
					document.getElementById("button7").style.backgroundColor = "green"
			}}
	// changing form green to red
	var color = "";
	if (status == true) {
			score += 100;
		    document.getElementById("score").innerHTML = "Score: "+score;
			color = "green";
			localStorage.setItem("score", score)
			scores.push(localStorage.getItem("score"));

	}
	else if (status == false) {
			color = "red"
	}
	if (btn_number == 1) {
			document.getElementById("button1").style.backgroundColor = color
	}
	else if (btn_number == 2) {
			document.getElementById("button2").style.backgroundColor = color
	}
	else if (btn_number == 3) {
			document.getElementById("button3").style.backgroundColor = color
	}
	else if (btn_number == 4) {
			document.getElementById("button4").style.backgroundColor = color
	}
	else if (btn_number == 5) {
			document.getElementById("button5").style.backgroundColor = color
	}
	else if (btn_number == 6) {
			document.getElementById("button6").style.backgroundColor = color
	}
	else if (btn_number == 7) {
			document.getElementById("button7").style.backgroundColor = color
	}
}

function change_picture() {
	number = Math.round(Math.random()*16) + 1
	if (number == 1) {
			document.getElementById("notes").src="c.png"
	}
	else if (number == 2) {
			document.getElementById("notes").src="c2.png"
	}
	else if (number == 3) {
			document.getElementById("notes").src="c3.png"
	}
	else if (number == 4) {
			document.getElementById("notes").src="c4.png"
	}
	else if (number == 5) {
			document.getElementById("notes").src="d.png"
	}
	else if (number == 6) {
			document.getElementById("notes").src="d2.png"
	}
	else if (number == 7) {
			document.getElementById("notes").src="e.png"
	}
	else if (number == 8) {
			document.getElementById("notes").src="e2.png"
	}
	else if (number == 9) {
			document.getElementById("notes").src="f.png"
	}
	else if (number == 10) {
			document.getElementById("notes").src="f2.png"
	}
	else if (number == 11) {
			document.getElementById("notes").src="g.png"
	}
	else if (number == 12) {
			document.getElementById("notes").src="g2.png"
	}
	else if (number == 13) {
			document.getElementById("notes").src="a.png"
	}
	else if (number == 14) {
			document.getElementById("notes").src="a2.png"
	}
	else if (number == 15) {
			document.getElementById("notes").src="b.png"
	}
	else if (number == 16) {
			document.getElementById("notes").src="b2.png"
	}
}

function new_question(btn_number) {
	check_answer(btn_number)
	change_picture()
}

function reset() {
	document.getElementById("button1").style.backgroundColor = "white"
	document.getElementById("button2").style.backgroundColor = "white"    
	document.getElementById("button3").style.backgroundColor = "white"    
	document.getElementById("button4").style.backgroundColor = "white"    
	document.getElementById("button5").style.backgroundColor = "white"
	document.getElementById("button6").style.backgroundColor = "white"
	document.getElementById("button7").style.backgroundColor = "white"
}   

function nextquestion(btn_number) {
	reset()
	new_question(btn_number)
}
	
function storeName() {
	var name = document.getElementById("name").value
	localStorage.setItem("name", name)
	names.push(localStorage.getItem("name")) 
}


change_picture()

function addToArrays() {
	// names.push(localStorage.getItem("name")) 
	// scores.push(localStorage.getItem("score"));
	displayArrays();
}

function displayArrays() {
	scores.sort(function(a, b) {
    return b - a;
});
	for (var i = 0; i < names.length; i++) {
		var tr = document.createElement("tr");
		var nameTd = document.createElement("td");
		nameTd.innerHTML = names[i];
		var scoreTd = document.createElement("td");
		scoreTd.innerHTML = scores[i];
		tr.appendChild(nameTd);
		tr.appendChild(scoreTd);
		document.getElementById("table").appendChild(tr);
	}
	}
	