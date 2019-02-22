function onReady() {
     const addToDoForm = document.getElementById("addToDoForm");
     const newToDoText = document.getElementById("newToDoText");
     const toDoList = document.getElementById("toDoList");

     addToDoForm.addEventListener("submit", () => {
       event.preventDefault();

       //get the text
       let title = newToDoText.value;

       //create a new li
       let newLi = document.createElement("li");
       //style the newLi
       newLi.classList.add("mdl-list__item");

       //create a new input
       let checkbox = document.createElement("input");
       //set the input's type to checkbox
       checkbox.type = "checkbox";
       //style the checkbox
       checkbox.style.margin = "0 5px 0 0";
       //attach the checkbox to the li
       newLi.appendChild(checkbox);

       //set the title
       newLi.innerHTML += title;

       //create a delete button
       let deleteToDo = document.createElement("button");
       //set the button text
       deleteToDo.textContent = "Delete";
       //style the button
       deleteToDo.style.margin = "0 0 0 20px";
       deleteToDo.classList.add("mdl-button", "mdl-js-button", "mdl-button--raised", "mdl-button--accent");
       //attach the button to the li
       newLi.appendChild(deleteToDo);

       //attach the li to the ul
       toDoList.appendChild(newLi);

       //empty the input
       newToDoText.value = '';

       //delete the newLi
       deleteToDo.addEventListener("click", () => {
         toDoList.removeChild(newLi);
       });

     });

 }

 window.onload = function() {
   onReady();
 }
