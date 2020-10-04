console.log("hello from js");
let formInfo = ["First Name", "Last Name", "ID", "Title", "Annual Salary"];


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
    console.log('submitted! jk nothing has happened yet');
    //this is where I want to grab input values;
    //getter .val();
    //setter .val('something');

    let firstName = $('#firstName').val();
    console.log('First Name: ', firstName);
    
    $('#firstName').val('');



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
