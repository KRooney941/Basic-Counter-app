// let first_variable = "hello world"

// let my_button = document.querySelector("#id")

// let subtract = document.querySelector("#subtract");

// subtract.addEventListener("click", function () {
//     let output = document.querySelector("#output");
//     let result = Number(output.innerText) - 1;
//     if (result <0) {
//         return alert("number can not go below 0")
//     }
        
  
//     output.innerText = result;
//   });



// let add = document.querySelector("#add");

// add.addEventListener("click", function () {
//   let output = document.querySelector("#output");
//   let result = Number(output.innerText) + 1;

//   output.innerText = result;
// });


function addAndSubtract(event) {
    // Get the element that was clicked
    let clickedButton = event.target;

    // Select the output element
    let output = document.querySelector("#output");

    // Convert the current output to a number
    let currentValue = Number(output.innerText);

    // Check the id of the clicked button to determine the operation
    if (clickedButton.id === "add") {
        // If it's the add button, increment the value
        currentValue = currentValue + 1;
    } else if (clickedButton.id === "subtract") {
        // If it's the subtract button, decrement the value
        // Also, ensure the result doesn't go below zero
        if (currentValue > 0) {
            currentValue = currentValue - 1;
        } else {
            // Handle the case when the number goes below 0
            alert("Number cannot go below 0");
            return;
        }
    }

    // Update the output with the new value
    output.innerText = currentValue;
}

// Attach the addAndSubtract function to both buttons
let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");

addButton.addEventListener("click", addAndSubtract);
subtractButton.addEventListener("click", addAndSubtract);