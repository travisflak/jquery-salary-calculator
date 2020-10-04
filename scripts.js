console.log("hello from js");
let formInfo = ["First Name", "Last Name", "ID", "Title", "Annual Salary"];


// event #2 when the document is ready
$(document).ready(onReady);

function onReady(){
    $('#Submit').on('click', buttonClicked); // event listener

    let ulFormInfo = $("#formInformation");

    for(let i=0; i < formInfo.length; i++){
        ulFormInfo.append(`<li> ${formInfo[i]} <button class="submitBtn">DELETE<button></li>`);
    }

    $('.submitBtn').on('click', deleteFunc); // event listener

function deleteFunc(){
    console.log('delete');
    $(this).parent().remove();
    
}

}
    
function buttonClicked(){
    console.log("I'm Clicked!");
  
    
}


// evntt #1
