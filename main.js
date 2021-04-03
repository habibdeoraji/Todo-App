// Selectors
var todoInput=document.getElementsByClassName("todo-input")[0];
var todoList=document.getElementsByClassName("todo-list")[0];
var todoButton=document.getElementsByClassName("todo-button")[0];

console.log(todoList)

// EventListner

todoButton.addEventListener("click", createTodoCard);
todoList.addEventListener('click',deleteTodocard);



// Function


function createTodoCard(event){
    event.preventDefault(); //Preventing deafult action of form

    // console.log("Hello")

   if(todoInput.value.length>0){
    // Creating Dynamic Content

    // Todo Card
    var todoCard=document.createElement("div");
    todoCard.className="todo-card";

    // Todo Message
    var todoMessage=document.createElement("h3");
    todoMessage.className="todo-message";
    todoMessage.innerText=todoInput.value;
    todoCard.appendChild(todoMessage);


    // Todo Button
    var deleteButton=document.createElement("delete-button");
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.className="delete-button"
    todoCard.appendChild(deleteButton);


    todoList.appendChild(todoCard)

    // Removing input box
    todoInput.value='';
   }else{
       alert("Enter todo message")
   }
}

// Delete Todo Card
function deleteTodocard(event){
    if (event.target.classList[1]==="fa-trash"){
        var parentItem=event.target.parentElement.parentElement;
        parentItem.remove()
    // console.log(event.target.parentElement.parentElement)

    }
}