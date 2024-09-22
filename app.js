const calculator = document.querySelector('.calculator');
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
		if(current.textContent !== '' || last.textContent !== '') { //vad dupa daca las num1 === ''
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
})