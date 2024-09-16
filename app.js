const keys = document.querySelectorAll(".key");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const current = document.querySelector(".current");
const last = document.querySelector(".last");
const eq = document.querySelector(".eq");
let result = 0;
let input;
let num1;
let num2;
let operation = '';
let waitForInput = true;

keys.forEach((key) => {
	const initialColor = key.style.backgroundColor;
	if (key.className.split(" ").includes("clear")) {
		key.addEventListener("mouseover", () => {
			key.style.backgroundColor = "hsl(3, 64%, 52%)";
		});
		key.addEventListener("mouseleave", () => {
			key.style.backgroundColor = initialColor;
		});
	} else {
		if (key.className.split(" ").includes("delete")) {
			key.addEventListener("mouseover", () => {
				key.style.backgroundColor = "hsl(210, 57%, 73%)";
			});
			key.addEventListener("mouseleave", () => {
				key.style.backgroundColor = initialColor;
			});
		} else {
			key.addEventListener("mouseover", () => {
				key.style.backgroundColor = "hsl(0, 0%, 40%)";
			});
			key.addEventListener("mouseleave", () => {
				key.style.backgroundColor = initialColor;
			});
		}
	}
});

numbers.forEach((number) => {
	number.addEventListener("click", () => {
		const value = number.textContent;
		if(waitForInput) {
			current.textContent = value;
			waitForInput = false;
		}
		else {
			current.textContent += value;
			num2 = parseFloat(current.textContent);
			num2 = Math.round(num2 * 10) / 10;
			current.textContent = num2;
		}
	});
});

clear.addEventListener("click", () => {
	current.textContent = "0";
	last.textContent = "";
});

function deleteLastLetter(string) {
	return string.slice(0, -1);
}

del.addEventListener("click", () => {
	current.textContent = deleteLastLetter(current.textContent);
});


// function equal() {
// 	let result;
// 	let num1 = parseInt(last.textContent,10);
// 	let num2 = parseInt(current.textContent);
// 	operation = last.textContent.slice(-1);
// 	switch(operation) {
// 		case '×':
// 			result = num1 * num2;
// 			break;
// 		case '÷':
// 			if(num2 === 0)
// 				result = 'ERROR';
// 			else	
// 				result = num1 / num2;
// 			break;
// 		case '+':
// 			result = num1 + num2;
// 			break;
// 		case '-':
// 			result = num1 - num2;
// 			break;
// 	}
// 	last.textContent = `${num1} ${operation} ${num2}`;
// 	current.textContent = result;
// }