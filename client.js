console.log('js');

$(document).ready(readyNow);

let employees = [];
let globalIndex = 0;

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
    employee.indexPosition = globalIndex;
    employees.push(employee);
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-salary-input').val('');
    globalIndex ++;

    handleEmployeeTable();

    handleTotalMonthly();
}

function handleEmployeeTable(){
    let newTableRow = '';
    let str = '';
    $('#employee-table-body').empty();
    for(employee of employees){
        if(employees.indexOf(employee)%2 === 0){
            str = 'evenColor';
        }else{
            str = 'oddColor';
        }
        newTableRow = `
            <tr class="${str}" id=row${employee.indexPosition}>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td class="money-row">${"$"+Number((employee.annualSalary).toFixed(1)).toLocaleString()}</td>
            <td><button class="delete-button" id=delete-button${employee.indexPosition}>Delete</button></td>
            </tr>
        `;
        $('#employee-table-body').append(newTableRow);
        $(`#delete-button${employee.indexPosition}`).on('click', handleDeleteButton);
    }
}

function handleTotalMonthly(){
    let salaryTotal = 0;
    let salaryMonthly = 0;
    for(employee of employees){
        salaryTotal += employee.annualSalary;
    }
    salaryMonthly = (salaryTotal/12);
    $('#total-monthly').text(`Total Monthly: ${"$"+Number((salaryMonthly).toFixed(1)).toLocaleString()}`);
    if(salaryMonthly > 20000){
        $('#total-monthly').addClass('red');
    }else{
        $('#total-monthly').removeClass('red');
    }
}

function handleDeleteButton(event){
    let indexOfEmployee = event.target.id.substring(13);
    for(let employee of employees){
        if(indexOfEmployee == employee.indexPosition){
            employees.splice(employees.indexOf(employee), 1);
            $(`#row${indexOfEmployee}`).remove();
            handleTotalMonthly();
            handleEmployeeTable();
        }
    }
}