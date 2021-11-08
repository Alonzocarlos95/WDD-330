'use strict';

const mainTable = document.getElementById('table_sales');
const adding = document.getElementById('add');
const averages = document.getElementById('getAvg');
const avgField = document.getElementById('average');
let totalValue = document.getElementById('total');

adding.addEventListener('click',() => {
    let count = 0;
    let totalMonths = 0;
    for(let i = 0; i < mainTable.rows[1].cells.length; i++){
        console.log('I am '+ i);
        debugger;
        if(mainTable.rows[1].cells[i].childNodes[1].value !== ''){
            totalMonths+= Number(mainTable.rows[1].cells[i].childNodes[1].value);       
        }
        else {
            count++;
        }
        
    }
if (count > 0){
    alert('Please fill in all the values of the months.');
}
else {
    totalValue.value = totalMonths;
}
});

averages.addEventListener('click',() => {
    debugger;
    if(totalValue.value === ''){
        alert('Please. Calculate the Total Sold first.');
    }
    else {
        avgField.value = totalValue.value/12;
    }
});