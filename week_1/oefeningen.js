// function greetings(name) {
//     return 'hallo '+ name + ' !'
// }
// console.log(greetings("anna"));

// function greetings(name = "Hallo daar!") {
//     return name
    
// }
// console.log(greetings());

// function controlAge(leeftijd) {
//     if (leeftijd >= 18) {
//         return "volwassen"
//     }

//     return "nog niet volwassen"
// }

// console.log(controlAge(21));
// console.log(controlAge(16));

// function showCallback() {
   
//     return "dit is een callback functie"
// }

// function showCalculation( callback) {
//     console.log(callback(callback))
// }

// showCalculation(showCallback)

// function increaseByTen(num) {  moet nog aan gewerkt worden
//     num = num + 10
//     return num
// }

// let myNumber = 20;
// increaseByTen(myNumber);
// console.log("Number:", myNumber);


// const todoList = [
//   {
//     task: "Complete Project",
//     subtasks: [
//       {
//         task: "Write Code",
//         subtasks: [
//           { task: "Implement Feature A" },
//           { task: "Test Feature A" },
//           { task: "Refactor Code" },
//         ],
//       },
//       {
//         task: "Document Project",
//         subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
//       },
//     ],
//   },
//   {
//     task: "Prepare Presentation",
//     subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
//   },
// ];

// function showItem(item) {
//     console.log('todo: ', item.task);
// }

// function showTasks(tasks) {
//     for (const items of tasks) {
//         showItem(items)

//         if (items.subtasks) {
//             showTasks(items.subtasks)
//         }
//     }
// }

// showTasks(todoList)


function checkAge(age) {
  if (age >= 18) {
    return "hello";
  } 

  return "Did parents allow you?"
  
}

function checkAgeInShort(age) {

let text = age >= 18 ? "allowed" : "did your parents allow you?"

return text
}


function checkAgeWithor(age) {
    
}

console.log(checkAge(17))
console.log(checkAgeInShort(17))
console.log(checkAgeWithor(16))