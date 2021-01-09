console.log( 'hello world ');
$(document).ready(function () {
    console.log('JQ and js ready');
$('#submit').on('click', addemployee)
$('body').on('click', '#delete', removeEmployee)

})

let expense = 0;

function addemployee(){
    const firstName = $("#firstName").val();
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

    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    setPayroll();
};

function setPayroll(){
    $('#payroll').empty();
    $('#payroll').append(expense.toFixed(2));
    if(expense > 20000){
        console.log(expense);
        $('#payroll').addClass( 'overBudget' )
    }
    else{
        $('#payroll').removeClass( 'overBudget')
    }
}

function removeEmployee(){
    let subSalary = ($(this).closest('tr').find('.salary').text()/ 12);
    console.log(subSalary);
    expense -= subSalary; 
    console.log(expense);
    $(this).closest('tr').remove();
    setPayroll();
};



