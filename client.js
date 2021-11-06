console.log('js');

$(document).ready(readyNow);

let employees = [];

function readyNow(){
    $('#submit-button').on('click', handleSubmitButton);
}

function handleSubmitButton(){
    let employee = {};
    employee.firstName = $('#first-name-input').val();
    employee.lastName = $('#last-name-input').val();
    employee.id = $('#id-input').val();
    employee.title = $('#title-input').val();
    employee.annualSalary = Number($('#annual-salary-input').val());
    // console.log('in handleSubmitButton');
    // console.log(employee);
    employees.push(employee);
}

$('#whatever')
