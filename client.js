console.log('js');

$(document).ready(readyNow);

let employees = [];

function readyNow(){
    $('#submit-button').on('click', handleSubmitButton);
}

function handleSubmitButton(){
    console.log('in handleSubmitButton');
}

