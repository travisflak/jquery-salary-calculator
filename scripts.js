console.log("hello from js");
let formInfo = ["First Name", "Last Name", "ID", "Title", "Annual Salary"];

let empInfo = [];

// event #2 when the document is ready
$(document).ready(onReady);

function onReady(){
    $('#Submit').on('click', buttonClicked); // event listener
    $('#submitForm').on('click', submitForm); // event listener

    //descendant selector with future descendants
    $('#formInformation').on('click', '.submitBtn', deleteFunc); // event listener

    $('#formInformation').on('click', '.changeColor', changeColor); // event listener

}

function submitForm(){
    //this is where I want to grab input values;
    //getter .val();
    //setter .val('something');

    let firstName = $('#firstName').val();

    let lastName = $('#lastName').val();

    //create a 1 time use object with the values from the inputs firstName and lastName
    let newEmpInfo = {
    firstNameKey: firstName,
    lastNameKey: lastName,
}

    empInfo.push(newEmpInfo);
    
    $('#firstName').val('');
    $('#lastName').val('');



}


function deleteFunc(){
    console.log('delete');
    $(this).parent().remove();
    
}

function buttonClicked(){
    let ulFormInfo = $("#formInformation");
    
    for(let i=0; i < formInfo.length; i++){
        ulFormInfo.append(`
            <li> ${formInfo[i]} 
                <button class="submitBtn">DELETE</button>
                <button class="changeColor">Change Color</button>
            </li>`
        );
    } 
}

function changeColor(){
    $(this).parent().toggleClass('pinkColor');

}


// evntt #1
