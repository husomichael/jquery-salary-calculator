console.log('js');

$(document).ready(readyNow);

let employees = [];

function readyNow(){
    $('#submit-button').on('click', handleSubmitButton);
}



////////////////////////////////////////////////


function handleSubmitButton(){
    let employee = {};
    employee.firstName = $('#first-name-input').val();
    employee.lastName = $('#last-name-input').val();
    employee.id = $('#id-input').val();
    employee.title = $('#title-input').val();
    employee.annualSalary = Number($('#annual-salary-input').val());
    console.log('in handleSubmitButton');
    // console.log(employee);
    employees.push(employee);
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-salary-input').val('');

    handleEmployeeTable(employees);
}

function handleEmployeeTable(employeesToRender){
    $('#employee-table-body').empty();
    // console.log('in handleEmployeeTable');
    for(employee of employeesToRender){
        let newTableRow = `
            <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            </tr>
        `;
        console.log(newTableRow);
        $('#employee-table-body').append(newTableRow);
    }
}