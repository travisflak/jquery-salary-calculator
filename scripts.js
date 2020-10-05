console.log("hello from js");
// let formInfo = ["First Name", "Last Name", "ID", "Title", "Annual Salary"];

let empInfo = [];

let yearlySalary = 0;

// event #2 when the document is ready
$(document).ready(onReady);

function onReady(){
    $('#submitForm').on('click', submitForm); // event listener


    //descendant selector with future descendants
    // $('#formInformation').on('click', '.submitBtn', deleteFunc); // event listener

    // $('#formInformation').on('click', '.changeColor', changeColor); // event listener

}

function submitForm(){
    //this is where I want to grab input values;
    //getter .val();
    //setter .val('something');

    let firstName = $('#firstName').val();

    let lastName = $('#lastName').val();

    let empID = $('#empID').val();

    let jobTitle = $('#jobTitle').val();

    let annualSalary = $('#annualSalary').val();

    calculateTable(annualSalary);

    //create a 1 time use object with the values from the inputs firstName and lastName
    let newEmpInfo = {

        firstNameKey: firstName,
        lastNameKey: lastName,
        empIDKey: empID,
        jobTitleKey: jobTitle,
        annualSalaryKey: annualSalary,

    }

    empInfo.push(newEmpInfo);
    
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    buttonClicked();
}


function deleteFunc(){
    console.log('delete');
    $(this).parent().remove();
    
}

function buttonClicked(){
    let ulFormInfo = $("#nameInput");
    $('#nameInput').empty();
    for(let i=0; i < empInfo.length; i++){
        ulFormInfo.append(`
            <tr> 
                <td>${empInfo[i].firstNameKey}</td>
                <td>${empInfo[i].lastNameKey}</td>
                <td>${empInfo[i].empIDKey}</td>
                <td>${empInfo[i].jobTitleKey}</td>
                <td>${empInfo[i].annualSalaryKey}</td>
                <td><button class="deleteBtn">DELETE</button></td>
            </tr>
        `)
    } 
}

// calculate monthly costs and append this to the to DOM
function calculateTable(salary){
    //add salaries for each employee
    let salaryNumber = Number(salary);
    let monthlyNumber = salaryNumber / 12;
    //take that sum and get the monthly total salary and devide by 12
    //display on DOM
    $('#totalSalary').empty();
    $('#totalSalary').append(`Monthly Salary: $${monthlyNumber}`);

    if(monthlyNumber > 20000){
        $('#totalSalary').addClass('redColor');
    }
}

// function changeColor(){
//     $(this).parent().toggleClass('pinkColor');

//}


// evntt #1
