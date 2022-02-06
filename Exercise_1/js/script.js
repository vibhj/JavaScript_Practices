var submit = document.getElementById("submit");
submit.addEventListener("click", displayDetails);

let skill1 = document.getElementById('skill1');
let skill2 = document.getElementById('skill2');
let skill3 = document.getElementById('skill3');
let checkvalue = [];
v7 = "";
let male = document.getElementById('male');
let female = document.getElementById('female');
v5 = "";
var row = 1;
 
function displayDetails(){
	var v1 = document.getElementById("name").value;
	var v2 = document.getElementById("email").value;
	var v3 = document.getElementById("website").value;
	var v4 = document.getElementById("image").value;

	if(male.checked){
		v5 = male.value;
	}
	if(female.checked){
		v5 = female.value;
	}
	if(skill1.checked){
		checkvalue.push(skill1.value);
	}
	if(skill2.checked){
			checkvalue.push(skill2.value);
	}
	if(skill3.checked){
		checkvalue.push(skill3.value);
	}

	for(let i = 0;i < checkvalue.length;i++){
		v7 += checkvalue[i] +  ' ';

	}


	if (!v1 || !v2 || !v3 || !v4 || !v5 || !v7){

		alert("Please fill all the boxes");
		return;
	}

	var display = document.getElementById("display");

	var newRow = display.insertRow(row);

	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);

	
	cell1.innerHTML = "<b>"+v1+"</b>" +"<br>" +v5+"<br>" +v2+"<br>" + "<a href='"+v3+"'target='_blank'>"+v3+"</a>"+"<br>" +v7;
	cell2.innerHTML = "<img src='"+v4+"'>";

	row++;
	checkvalue = [];
	v7 = "";

}