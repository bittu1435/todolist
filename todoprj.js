var todos = ["Buy new Turtle"];
var input = prompt("what would you like todo?"); 
while (input !== "quit") {
    if (input === "list") {
    listtodo();
    } else if(input ==="new") {
    newtodo();
    } else if (input === "delete") {
    deletetodo();
    }
    input = prompt("what would you like todo?");
}
console.log("Ok!, u quite the app");



function listtodo(){
    console.log("***************");
    todos.forEach(function(todos,i){
        console.log(i+":"+todos);
    });
    console.log("***************");
}

function newtodo(){
    var newtodo = prompt("Enter your new todo?");
    todos.push(newtodo);
    console.log("You have sucessfully added your new To-do item in your list!");
}

function deletetodo(){
    var index = prompt("Enter your todo index to be deleted?");
    todos.splice(index,1);
    console.log("Your To-do with the given index was successfully removed!");
}
