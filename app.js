const keys = document.querySelectorAll('.key');
const numbers = document.querySelectorAll('.num');
const del = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const screen = document.querySelector('.screen p');

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
        screen.textContent += value;
    });
});
clear.addEventListener('click', () => {
    screen.textContent = '';
});
function deleteLastLetter(string) {
    return string.slice(0,-1);
}
del.addEventListener('click', () => {
    screen.textContent = deleteLastLetter(screen.textContent);
});