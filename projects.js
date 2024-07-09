document.addEventListener('DOMContentLoaded', function() {
    let counter = 0; // مقدار اولیه متغیر
    const numberDisplay = document.getElementById('number');
    const manButton = document.getElementById('man');
    const sabButton = document.getElementById('sab');
    const mosButton = document.getElementById('mos');

    manButton.addEventListener('click', function() {
        counter--; // کاهش مقدار متغیر
        numberDisplay.textContent = counter; // نمایش مقدار جدید
        if(counter<0){
            numberDisplay.style.color = 'red';
        }
        if(counter==0){
            numberDisplay.style.color = 'white';
        }
    });

    sabButton.addEventListener('click', function() {
        counter = 0; // ریست کردن مقدار متغیر
        numberDisplay.textContent = counter; // نمایش مقدار جدید
        if(counter==0){
            numberDisplay.style.color = 'white';
        }
    });

    mosButton.addEventListener('click', function() {
        counter++; // افزایش مقدار متغیر
        numberDisplay.textContent = counter; // نمایش مقدار جدید
        if(counter>0){
            numberDisplay.style.color = 'green';
        }
        if(counter==0){
            numberDisplay.style.color = 'white';
        }
    });
});
