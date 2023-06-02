// // MY TASK MANAGER - TERMINAL

// // SETUP CODE
// const fs = require('fs');
// const readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);

// let tasks = ["task1", "task2", "task3"]

// let menu = "Welcome to your task manager, Press: 1. to see all your tasks 2. to add a task 3. to delete a task 4. to mark a task as done 5. to Exit the task manager"


// // const showtasks = () => {
// //     console.log(tasks)
// // }

// // showtasks()

// // EXEMPLE
// rl.question(menu, (selectionnumber) => {
//     if( selectionnumber === "1") {
//         console.log(tasks)
//     }
//     rl.close();
// });

var prompt = require("prompt-sync")();

let tasks = ["task1", "task2", "task3"];

function Menu() {
  console.log(
    "Welcome to your task manager, Press:\n1. to see all your tasks\n2. to add a task\n3. to delete a task\n4. to mark a task as done\n5. to Exit the task manager"
  );
  var number = prompt();
  if (number == 1) {
    console.log(tasks);
    console.log(Menu());
  }
  if (number == 2) {
    var add = prompt("add a task : ");
    tasks.push(add);
    console.log(Menu());    
  }

  if (number == 3) {
        var remove = prompt ("delete a task: ")
        tasks.pop (remove);
        console.log(Menu());
  }

  if (number == 5) {
    console.log("closing the task manager");
  }
}

function addtask(add) {
  tasks.push(add);
}

function deletetask(remove) {
    tasks.pop(remove)
}


console.log(
  "Welcome to your task manager, Press:\n1. to see all your tasks\n2. to add a task\n3. to delete a task\n4. to mark a task as done\n5. to Exit the task manager"
);
var number = prompt();

if (number == 1) {
  console.log(tasks);
  console.log(Menu());
}
if (number == 2) {
  var add = prompt("add a task : ");
  addtask(add);
  console.log(Menu());
}

if (number == 3) {
    var remove = prompt ("delete a task: ")
    deletetask (remove);
    console.log(Menu());
}

if (number == 5) {
  console.log("closing the task manager");
}