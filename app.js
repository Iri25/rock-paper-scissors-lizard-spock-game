const resultGameExtended = document.getElementById("extended-game-result");

const rockButtonExtended = document.querySelector(
  ".extended-game .far.fa-hand-rock"
);
const paperButtonExtended = document.querySelector(
  ".extended-game .far.fa-hand-paper"
);
const scissorsButtonExtended = document.querySelector(
  ".extended-game .far.fa-hand-scissors"
);
const lizardButtonExtended = document.querySelector(
  ".extended-game .far.fa-hand-lizard"
);
const spockButtonExtended = document.querySelector(
  ".extended-game .far.fa-hand-spock"
);

const optionsGameExtended = ["rock", "paper", "scissors", "lizard", "spock"];

function capitalize(choice) {
  if (typeof choice !== "string" || choice.length === 0) {
    return "";
  }
  return choice[0].toUpperCase() + choice.slice(1);
}

function playGameExtended(playerChoice) {
  const randomIndex = Math.floor(Math.random() * optionsGameExtended.length);
  const computerChoice = optionsGameExtended[randomIndex];

  let message = "";

  if (playerChoice === computerChoice)
    message = `It's a draw! You both chose ${playerChoice}.`;
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "rock" && computerChoice === "lizard") ||
    (playerChoice === "lizard" && computerChoice === "spock") ||
    (playerChoice === "spock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "lizard") ||
    (playerChoice === "lizard" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "spock") ||
    (playerChoice === "spock" && computerChoice === "rock")
  ) {
    message = `Congratulations, you won! ${capitalize(
      playerChoice
    )} beats ${computerChoice}!`;
  } else {
    message = `Sorry, the computer won! ${capitalize(
      computerChoice
    )} beats ${playerChoice}!`;
  }

  if (!message) {
    message = "Something went wrong. Please try again!";
  } else {
    resultGameExtended.innerHTML = message;
  }
}

(function init() {
  rockButtonExtended.addEventListener("click", () => playGameExtended("rock"));
  paperButtonExtended.addEventListener("click", () =>
    playGameExtended("paper")
  );
  scissorsButtonExtended.addEventListener("click", () =>
    playGameExtended("scissors")
  );
  lizardButtonExtended.addEventListener("click", () =>
    playGameExtended("lizard")
  );
  spockButtonExtended.addEventListener("click", () =>
    playGameExtended("spock")
  );
})();
