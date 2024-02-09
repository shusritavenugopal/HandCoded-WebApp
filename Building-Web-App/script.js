/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

document.addEventListener('DOMContentLoaded', function() {
    const addCertificationBtn = document.getElementById('add-certification-btn');
    const certificationsTable = document.getElementById('certifications-table').getElementsByTagName('tbody')[0];

    addCertificationBtn.addEventListener('click', function() {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" class="certification-name"></td>
            <td><input type="text" class="issuing-organization"></td>
            <td><input type="date" class="date-earned"></td>
            <td><button class="delete-row-btn">Delete</button></td>
        `;
        certificationsTable.appendChild(newRow);

        const deleteBtns = document.getElementsByClassName('delete-row-btn');
        for (const btn of deleteBtns) {
            btn.addEventListener('click', function() {
                btn.closest('tr').remove();
            });
        }
    });
});

function displayMessage() {
    document.getElementById("message").innerText = "Hello there! Thanks for visiting my page!";
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.message-form');
    const savedMessageElement = document.getElementById('savedMessage');

    // Form submission event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form input values
        const name = document.getElementById('name').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form inputs
        if (name === '' || message === '') {
            alert('Please enter both your name and a message.');
            return;
        }

        // Save form data to local storage
        const data = {
            name: name,
            message: message
        };
        localStorage.setItem('messageData', JSON.stringify(data));

        // Reset form inputs
        form.reset();

        // Display success message
        alert('Message saved successfully!');
    });

    // Retrieve and display saved message from local storage
    const savedData = localStorage.getItem('messageData');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        savedMessageElement.textContent = `Name: ${parsedData.name}, Message: ${parsedData.message}`;
    } else {
        savedMessageElement.textContent = 'No message saved.';
    }
});
