console.log( 'hello world ');
$(document).ready( function(){
    console.log('JQ and js ready'); 
$('#submit').on('click', addemployee);// adding function to submit form data
$('body').on('click', '#delete', removeEmployee);
});// adding function to remove data, selecting an ancestor el.

let expense = 0;// item to collect total annual salary div. by 12

function addemployee(){ //submitting form data to table below
    const firstName = $("#firstName").val();// elements to hold inputs
    const lastName = $("#lastName").val();
    const id = $("#id").val();
    const title = $("#title").val();
    const annualSalary = $("#annualSalary").val();
    expense += Number(annualSalary / 12);// adds data each time function fires
   
    $("#tableBody").append( //holds data submitted, don't miss the ` `.
        `<tr id = 'test'>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td class ="salary">${annualSalary}</td>
        <td><button id='delete' type=button> Delete </button></td>
        </tr>`);// adding a new row to table and button to run remove function.

    $('#firstName').val('');// clear inputs after catching data from them 
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    setPayroll();// change the total expense (sum of each annual salary div by 12)
};// end addEmployee function

function setPayroll(){
    $('#payroll').empty();// clear previous expense total
    $('#payroll').append(expense.toFixed(2));//add new expense total
    if(expense > 20000){// add formatting if over monthly budget with a css class
        console.log(expense);
        $('#payroll').addClass( 'overBudget' );
        alertFunction();// call function to alert for over budget.
    }
    else{//remove class if underbudget
        $('#payroll').removeClass( 'overBudget');
    }
};//end of setPayroll function

function removeEmployee(){//selecting delete button with a scope of body.
    let subSalary = ($(this).closest('tr').find('.salary').text()/ 12);
    console.log(subSalary);//'this' is the button, selecting its row, finding adjacent salary
    expense -= subSalary; //removing subSalary (annual salary/12)
    console.log(expense);
    $(this).closest('tr').remove();//from the button, removing its row.
    setPayroll();//updating expense with subsalary subtracted.
};

function alertFunction(){//a quick pop up with the amount over budget
 let amountOverB = (expense - 20000).toFixed(2); 
 alert(`Warning: $${amountOverB} Over Budget`);
}
//below is a work in progress.... it is 
function displayBudget(){// not called, I need to get it to display once,
   let displayBudget = 0;// update the number when removed.
    if( expense > 20000){// I could add it as a new td possably.
        displayBudget = expense - 20000;
    $('#tableBody').append(
        `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td> <span style="text-align: right;"> 
                <h4>OverBudget:</h4></span> </td>
        <td> $${displayBudget}</td>
        </tr>`
        );
    };
};


