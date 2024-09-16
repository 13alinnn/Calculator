const buttons = document.querySelectorAll(".key");
const keys = document.querySelectorAll('.key:not(.delete):not(.clear):not(.eq)');
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const current = document.querySelector(".current");
const last = document.querySelector(".last");
const eq = document.querySelector(".eq");
let input ='';
let num1;
let num2;
let operation = '';
let symbolPressed = false;
let result;
const delay = ms => new Promise(res => setTimeout(res, ms));

buttons.forEach((key) => {
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


keys.forEach(key => {
	key.addEventListener('click', () => {
		console.log(key.textContent);
		if(symbolPressed === false) {
			if(key.textContent === '+' || key.textContent === '-' || key.textContent === '*' || key.textContent === '/') {
				symbolPressed = true;
			}
			input += key.textContent;
		}
		else {
			if(!(key.textContent === '+' || key.textContent === '-' || key.textContent === '*' || key.textContent === '/')) {
				input += key.textContent;
			}
			else {
				//stores the first number in num1, the operator in operation and the second number in num2
				// symbolPressed = false;
				let index = -1;
				for(let i = 0; i < input.length; i++) {
					if('+-/*'.includes(input[i])) {
						index = i;
						break;
					}
				}
				num1 = parseFloat(input.slice(0,index));
				operation = input[index];
				num2 = parseFloat(input.slice(index + 1));
				result = operate(num1, operation, num2);
				input = result;
				if(input === 'ERROR') {
					setTimeout(() => {
						current.textContent = "0";
						last.textContent = "";
						input = '';
					},3000);
				}
				input += key.textContent;
				current.textContent = input;
		}
	}
		current.textContent = input;
	});
});


function operate(num1, operation, num2) {
	switch(operation) {
		case '*':
			return num1 * num2;
		case '/':
			if(num2 === 0) return 'ERROR';
			return num1 / num2;
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
	}
}

clear.addEventListener("click", () => {
	current.textContent = "0";
	last.textContent = "";
	input = '';
});

function deleteLastLetter(string) {
	return string.slice(0, -1);
}

del.addEventListener("click", () => {
	current.textContent = deleteLastLetter(current.textContent);
	input = deleteLastLetter(input);
});

eq.addEventListener('click', () => {
	let index = -1;
	for(let i = 0; i < input.length; i++) {
		if('+-/*'.includes(input[i])) {
			index = i;
			break;
		}
	}
	if(index !== -1) {
		num1 = parseFloat(input.slice(0,index));
		operation = input[index];
		num2 = parseFloat(input.slice(index + 1));
		result = operate(num1, operation, num2);
		input = result;
		if(input === 'ERROR') {
			setTimeout(() => {
				current.textContent = "0";
				last.textContent = "";
				input = '';
			},3000);
		}
		current.textContent = input;
		symbolPressed = false;
	}
});