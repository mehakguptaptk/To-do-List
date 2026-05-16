document.addEventListener("DOMContentLoaded",function(){
   
    const inputField = document.getElementById("input-btn");
     
    const comp = document.getElementById("comp");
    const uncomp = document.getElementById("uncomp");
  
function updateCounts(){
    let TotalTasks = document.querySelectorAll(".task-row").length;
    let compTasks = document.querySelectorAll(".checkbox:checked").length;
    let uncompTasks = TotalTasks-compTasks;
    comp.textContent = `Completed: ${compTasks}`;
    uncomp.textContent = `Uncompleted: ${uncompTasks}`;
    
}
    function addWork(){
    // created a row
    let row = document.createElement('div');
    //providing class to row for css
    row.classList.add('task-row')
    let listTag = document.getElementById("List");

    //created a checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox'); 

    //adding functionality to checkbox
    checkbox.addEventListener('change',function(){
        if(checkbox.checked){
            textContainer.style.textDecoration = 'line-through';
            textContainer.style.opacity = 0.5;
            checkbox.style.accentColor = 'blue'; 
            checkbox.style.outline = '1px solid white'; 
            updateCounts();
            }
        else{
            textContainer.style.textDecoration = 'none';
            textContainer.style.opacity = 1;
            checkbox.style.outline = "none";
            updateCounts();
        }
    });
    
    //added checkbox in row
    row.appendChild(checkbox);
    // updateCounts();
    
    //if u want to use appendChild then create text in
    //span tag or div tag
    let textContainer = document.createElement('span');
    textContainer.textContent = inputField.value;
    //adding text to  row
    row.appendChild(textContainer)

    //creating group for edit and delete button
    let btnGrp = document.createElement('div');
    //providing id to btnGrp
    btnGrp.classList.add('btnGrp');

    //creating delete button
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    //providing class
    delBtn.classList.add('del');


    //adding event listener to delBtn
    delBtn.addEventListener('click',function(){
        // let row = document.getElementById('task-row');
        row.remove();
    });


    //added button in btnGrp
    btnGrp.appendChild(delBtn);
    

    //cretaing edit button
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
     //providing class
    editBtn.classList.add('edit');

    //adding functionality to edit btn
    editBtn.addEventListener('click',function(){
        if(editBtn.textContent==="Edit"){

            textContainer.contentEditable = 'true';
            editBtn.textContent = "Save";
            //will show arrow on text
            textContainer.focus();
            //will add style to text so that user get
            //to visible differentiation
            textContainer.style.outline = '2px solid blue';
            textContainer.style.cursor='text';
            textContainer.style.backgroundColor='#222';


        }
        else{
            textContainer.contentEditable = false;
            editBtn.textContent = "Edit";
            textContainer.style.outline = 'None';
        }
    });  


    //added button in row
    btnGrp.appendChild(editBtn);

    //adding btngrp  to row
    row.appendChild(btnGrp);
    listTag.appendChild(row);
    
    updateCounts();
}



const btn = document.getElementById("Add-button");

btn.addEventListener('click',addWork);

});