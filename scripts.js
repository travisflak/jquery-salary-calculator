console.log("hello from js");
let formInfo = ["First Name", "Last Name", "ID", "Title", "Annual Salary"];


// event #2 when the document is ready
$(document).ready(onReady);



function onReady(){
    console.log("hello from jquery");
    // add evnt listeners aka click events
    //get data to display

    // event listener
    $('#Submit').on('click', buttonClicked);
    $("#formInformation").append('<li>Hello</li>');
}
    
function buttonClicked(){
    console.log("I'm Clicked!");
    
}


// evntt #1
