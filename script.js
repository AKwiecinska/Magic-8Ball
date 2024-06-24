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
