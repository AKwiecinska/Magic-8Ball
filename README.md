# Magic 8Ball 🎱

The Magic 8Ball Web App is a fun application where users can ask any question and receive a random answer. This README file provides an overview of the project's structure, functionality, and usage instructions.

## Features 📋

- Randomized answers to user questions.
- Real-time validation to ensure questions end with a question mark.
- Stylish and responsive user interface using Google Fonts and custom SCSS.

## Technologies Used 🛠️

- HTML: The structure of the interface.
- CSS: Styling and layout of the elements.
- JavaScript: Logic and interactivity.
- Google Fonts for typography.

## JavaScript Code Overview

### Selecting DOM Elements

```
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const input = document.querySelector(".questions");
const ballBtn = document.querySelector(".ball");
const answers = [
  "Yes",
  "No",
  "Maybe",
  "Ask again later",
  "Definitely",
  "I don't think so",
  "It is certain",
  "Very doubtful",
];
```

These lines of code use the **document.querySelector()** methods to select HTML elements by their classes. These elements are essential for interacting with user input and displaying messages.

### Input Validation and Answer Generation

```
const validateInput = (input) => {
  return input.trim() !== "" && input.trim().endsWith("?");
};

const generateAnswer = () => {
  const randomNumber = Math.floor(Math.random() * answers.length);
  answer.textContent = answers[randomNumber];
  error.textContent = "";
};

const displayError = (message) => {
  error.textContent = message;
  answer.textContent = "";
};

```

- **validateInput** checks if the input is not empty and ends with a question mark.
- **generateAnswer** selects a random answer from the array and displays it.
- **displayError** shows an error message if the input is invalid.

### Event Listener

```
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const userInput = input.value;
    if (validateInput(userInput)) {
      generateAnswer();
    } else {
      displayError("Please ask a valid question ending with a question mark.");
    }
    console.log("Enter was pressed" + event);
  }
});
```

This event listener waits for the Enter key to be pressed, validates the input, and either generates an answer or displays an error message.

- **checkForm** iterates through an array of input fields, checks if they are empty, and displays error messages if necessary.
- **checkLength** ensures that an input's length meets a specified minimum requirement and displays an error message if not.
- **checkPassword** compares two password inputs to ensure they match and displays an error if they don't.
- **checkEmail** uses a regular expression to validate the format of the email input and displays an error if it's incorrect.

You can see the Magic 8Ball in action by clicking here: <a href="https://akwiecinska.github.io/Magic-8Ball/">Magic 8Ball</a>.
