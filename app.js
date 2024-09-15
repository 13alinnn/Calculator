const keys = document.querySelectorAll('.key');
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
    if(key.className.split(' ').includes('delete')) {
        key.addEventListener('mouseover', () => {
            key.style.backgroundColor = 'hsl(210, 57%, 73%)';
        });
        key.addEventListener('mouseleave', () => {
            key.style.backgroundColor = initialColor;
        })
    }
    });