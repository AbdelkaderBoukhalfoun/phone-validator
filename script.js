// Constants for DOM elements
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Event listener for Check button
checkBtn.addEventListener("click", () => {
    const input = userInput.value.trim(); // Trim whitespace from input

    if (input.length === 0) {
        alert("Please provide a phone number");
    } else {
        checkValidNumber(input);
        userInput.value = ''; // Clear input field after checking
    }
});

// Event listener for Enter key press in userInput field
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const input = userInput.value.trim(); // Trim whitespace from input
        checkValidNumber(input);
        userInput.value = ""; // Clear input field after checking
    }
});

// Event listener for Clear button
clearBtn.addEventListener("click", () => {
    resultsDiv.innerHTML = ""; // Clear results display
});

// Function to check if phone number is valid
function checkValidNumber(input) {
    const phoneRegex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
    const isValid = phoneRegex.test(input);

    resultsDiv.innerHTML = isValid ? `Valid US number: ${input}` : `Invalid US number: ${input}`;
    resultsDiv.style.color = isValid ? '#066637' : '#af0f0f';
}
