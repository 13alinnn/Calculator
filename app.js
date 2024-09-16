const keys = document.querySelectorAll('.key');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const del = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const current = document.querySelector('.current');
const last = document.querySelector('.last');
const eq = document.querySelector('.=');
let calculation ='';
let result = 0;

keys.forEach(key => {
    const initialColor = key.style.backgroundColor;
    if(key.className.split(' ').includes('clear')) {
        key.addEventListener('mouseover', () => {
            key.style.backgroundColor = 'hsl(3, 64%, 52%)';
        });
        key.addEventListener('mouseleave', () => {
            key.style.backgroundColor = initialColor;
        });
    }
    else {
        if(key.className.split(' ').includes('delete')) {
        key.addEventListener('mouseover', () => {
            key.style.backgroundColor = 'hsl(210, 57%, 73%)';
        });
        key.addEventListener('mouseleave', () => {
            key.style.backgroundColor = initialColor;
        });
    }
        else {
            key.addEventListener('mouseover', () => {
                key.style.backgroundColor = 'hsl(0, 0%, 40%)';
            });
            key.addEventListener('mouseleave', () => {
                key.style.backgroundColor = initialColor;
            });            
        }
    }
    });

numbers.forEach(number => {
    number.addEventListener('click',() => {
        const value = number.textContent;
        current.textContent += value;
    });
});

clear.addEventListener('click', () => {
    current.textContent = '';
    last.textContent = '';
});

function deleteLastLetter(string) {
    return string.slice(0,-1);
}

del.addEventListener('click', () => {
    current.textContent = deleteLastLetter(current.textContent);
});

operators.forEach(operator => {
    operator.addEventListener('click', () =>{
        if(last.textContent === '') last.textContent += current.textContent + ' ';
        if(last.textContent.slice(-1) === '+' || last.textContent.slice(-1) === '-' || last.textContent.slice(-1) === '×' || last.textContent.slice(-1) === '÷') 
            last.textContent = last.textContent.slice(0, -1);
        last.textContent += operator.textContent;
        current.textContent = '0';
    });
});

