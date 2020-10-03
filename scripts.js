console.log("hello from js");

// event #2 when the document is ready
$(document).ready(onReady);

function onReady(){
    console.log("hello from jquery");
    // add evnt listeners aka click events
    //get data to display
    $('#Submit').on('click', buttonClicked);
}
    
function buttonClicked(){
    console.log("I'm Clicked!");
    
}


// evntt #1
