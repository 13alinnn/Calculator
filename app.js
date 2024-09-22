const buttons = document.querySelectorAll('.key');
const screen = document.querySelector('.screen');
const last = document.querySelector('.last');
const current = document.querySelector('.current');
const numberKeys = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.eq');
const dot = document.querySelector('.dot');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
let sign = '';
operation = '';
let num1 = '';
let num2 = '';
let shouldRefreshScreen = true;

numberKeys.forEach(btn => {
	btn.addEventListener('click', () =>{
		if(shouldRefreshScreen) {
			num2 = btn.textContent;
			shouldRefreshScreen = false;
		}
		else
			num2 += btn.textContent;
		current.textContent = num2;
	});
});

operators.forEach(btn => {
	btn.addEventListener('click', () => {
		if(num1 !== '' && num2 !== '') {
			let number1 = parseFloat(num1);
			let number2 = parseFloat(num2);
			let result = '';
			if(sign === '+') result = number1 + number2;
			if(sign === '-') result = number1 - number2;
			if(sign === '×') result = number1 * number2;
			if(sign === '÷') result = number1 / number2;
			if(result !== Infinity)
				{			
				num1 = result;
				sign = btn.textContent;
				last.textContent = num1+sign;
				shouldRefreshScreen = true;
				num2 = '';
		}
			else divisionByZero();
		}
		if(current.textContent !== '0' && (current.textContent !== '' || last.textContent !== '')) { 
			if(sign === '') {
				sign = btn.textContent;
				num1 = num2;
				last.textContent = num1 + sign;
				num2 = '';
				console.log(sign);
			}
			else {
				sign = btn.textContent;
				last.textContent = num1 + sign;
				console.log(sign);
			}
			shouldRefreshScreen = true;
		}
	});
});

function divisionByZero() {
	num1 = '';
	num2 = '';
	sign = '';
	shouldRefreshScreen = true;
	current.textContent = 'ERROR';
	last.textContent = '';
}

equals.addEventListener('click', () =>{
	if(num1 !== '' && num2 !== '' && sign !== '') {
		let number1 = parseFloat(num1);
		let number2 = parseFloat(num2);
		let result = '';
		if(sign === '+') result = number1 + number2;
		if(sign === '-') result = number1 - number2;
		if(sign === '×') result = number1 * number2;
		if(sign === '÷') result = number1 / number2;
		if(result !== Infinity) {
		last.textContent = result;
		num1 = result;
		num2 = '';
		current.textContent = '0';
		shouldRefreshScreen = true;}
		else divisionByZero();
	}
});

function deleteLastLetter(str) {
	return str.slice(0,-1);
}

del.addEventListener('click', () => {
	num2 = deleteLastLetter(num2);
	current.textContent = deleteLastLetter(current.textContent);
});

clear.addEventListener('click', () => {
	num1 = '';
	num2 = '';
	current.textContent = '0';
	last.textContent = '';
	shouldRefreshScreen = true;
	sign = '';
});

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

dot.addEventListener('click', () => {
	if(shouldRefreshScreen) {
		current.textContent = '0';
		shouldRefreshScreen = false;
	}
	if(current.textContent === '') current.textContent = '0';
	if(current.textContent.includes('.')) return;
	current.textContent += '.';
	num2 += '.';
})