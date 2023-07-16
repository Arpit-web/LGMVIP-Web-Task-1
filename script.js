let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == "")
    {
        alert("Likh to le bhai 눈_눈")             //for no inputs
    }
    
else{
        let todos = document.createElement("ul");                                 //create new elements for each todos entered
        todos.innerHTML=`${inputs.value} <i class="fa-solid fa-trash icon"></i>`; 
        text.appendChild(todos);
        inputs.value="";
        todos.querySelector("i").addEventListener("click" , remove);              //adding remove functionality to the fa template
        function remove(){
            todos.remove()
        }
    }
}