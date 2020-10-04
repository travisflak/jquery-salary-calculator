console.log("hello from js");
let formInfo = ["First Name", "Last Name", "ID", "Title", "Annual Salary"];


// event #2 when the document is ready
$(document).ready(onReady);

function onReady(){
    $('#Submit').on('click', buttonClicked); // event listener

    let ulFormInfo = $("#formInformation");
    ulFormInfo.append('<li>' + formInfo[0] + '</li>');
    ulFormInfo.append('<li>' + formInfo[1] + '</li>');
    ulFormInfo.append('<li>' + formInfo[2] + '</li>');
    ulFormInfo.append('<li>' + formInfo[3] + '</li>');
    ulFormInfo.append('<li>' + formInfo[4] + '</li>');
}
    
function buttonClicked(){
    console.log("I'm Clicked!");
    
}


// evntt #1
