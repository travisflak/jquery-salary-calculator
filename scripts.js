console.log("hello from js");
let formInfo = ["First Name", "Last Name", "ID", "Title", "Annual Salary"];


// event #2 when the document is ready
$(document).ready(onReady);

function onReady(){
    $('#Submit').on('click', buttonClicked); // event listener

    //descendant selector with future descendants
    $('#formInformation').on('click', '.submitBtn', deleteFunc); // event listener

function deleteFunc(){
    console.log('delete');
    $(this).parent().remove();
    
}

}
    
function buttonClicked(){
    let ulFormInfo = $("#formInformation");
    
    for(let i=0; i < formInfo.length; i++){
        ulFormInfo.append(`
            <li> ${formInfo[i]} 
                <button class="submitBtn">DELETE</button>
                <button class="submitBtn">Change Color</button>
            </li>`
        );
    } 
}


// evntt #1
