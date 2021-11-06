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

    handleTotalMonthly();
}

function handleEmployeeTable(employeesToRender){
    let newTableRow = '';
    $('#employee-table-body').empty();
    // console.log('in handleEmployeeTable');
    for(employee of employeesToRender){
        newTableRow = `
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

function handleTotalMonthly(){
    let salaryTotal = 0;
    let salaryMonthly = 0;
    for(employee of employees){
        salaryTotal += employee.annualSalary;
    }
    salaryMonthly = (salaryTotal/12).toFixed(2);
    $('#total-monthly').text(`Total Monthly: $${salaryMonthly}`);
    // if(salaryMonthly >)
}