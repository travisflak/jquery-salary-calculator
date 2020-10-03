console.log('hello from js');

// event #2 when the document is ready
$(document).ready(onReady);

function onReady(number){
    console.log('hello from jQuery', number);
    
}



// evntt #1
onReady(1);