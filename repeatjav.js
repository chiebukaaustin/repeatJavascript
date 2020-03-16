/*alert("begin")
var Answer = prompt("are we there yet?");

while (Answer.indexOf("yes") === -1 && Answer.indexOf("yeah") === -1) {
    var Answer = prompt("ae we there yet?");
    alert("we made it loke mike will!");
}  */


// new to do list
var todos = ["buy chow"]
var input = prompt("What would you like to do?")

while (input !== "quit") {
    
    if (input === "list") {
        console.log (todos)   
    }
    else if (input === "new") {

    var newTodo = prompt("Enter New Todo");
        todos.push(newTodo);
    }
   input = prompt("What would you like to do?");
}
 console.log ("thank you for your time")

    

    