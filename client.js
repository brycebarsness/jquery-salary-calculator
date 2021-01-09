console.log( 'hello world ');
$(document).ready(function () {
    console.log('JQ and js ready');
$('#submit').on('click', addemployee)
$('body').on('click', '#delete', removeEmployee)

})

let expense = 0;

function addemployee(){
    const firstName = $("#employeeFirstName").val();
    const lastName = $("#lastName").val();
    const id = $("#id").val();
    const title = $("#title").val();
    const annualSalary = $("#annualSalary").val();
    expense += Number(annualSalary / 12)
   
    $("#tableBody").append(
        `<tr id = 'test'>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td class ="salary">${annualSalary}</td>
        <td><button id='delete' type=button> Delete </button></td>
        </tr>`);

    $('#employee-first-name').val('');
    $('#last-name').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualsalary').val('');
    $('#payroll').empty() 
    $('#payroll').append(expense);
};

function removeEmployee(){
$(this).closest('tr').remove();
};

