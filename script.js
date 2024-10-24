let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

function initialize() {
    const rulesButton = document.getElementById("rules-button");
    const rulesPopup = document.getElementById("rules-popup");
    const closeButton = document.querySelector(".close-button");

    addEventListeners(rulesButton, rulesPopup, closeButton);

    // Update the initial scores
    updateScore();
}

function addEventListeners(rulesButton, rulesPopup, closeButton) {
    rulesButton.addEventListener("click", () => {
        rulesPopup.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        rulesPopup.style.display = "none";
    });
}

function opennewpage() {
    window.location.href = "winner.html";
}

function updateScore() {
    document.getElementById("cs_score").innerText = computerScore;
    document.getElementById("ys_score").innerText = playerScore;
}

initialize();

function play(playerChoice) {
    document.getElementById("playarea").style.display = "none";
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        // Save updated playerScore to localStorage
        localStorage.setItem("playerScore", playerScore);
        // Redirect to winner.html if the player wins
        opennewpage();
        return; // Stop further execution after redirection
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        document.getElementById("lost-area").style.display = "block";
        if (playerChoice === "rock") {
            document.getElementById("user-rock-lost").style.display = "block";
        } else if (playerChoice === "paper") {
            document.getElementById("user-paper-lost").style.display = "block";
        } else {
            document.getElementById("user-scissor-lost").style.display = "block";
        }
        if (computerChoice === "rock") {
            document.getElementById("cpu-rock-lost").style.display = "block";
        } else if (computerChoice === "paper") {
            document.getElementById("cpu-paper-lost").style.display = "block";
        } else {
            document.getElementById("cpu-scissor-lost").style.display = "block";
        }
        computerScore++;
    } else {
        if (playerChoice === "rock") {
            document.getElementById("user-rock-tie").style.display = "block";
        } else if (playerChoice === "paper") {
            document.getElementById("user-paper-tie").style.display = "block";
        } else {
            document.getElementById("user-scissor-tie").style.display = "block";
        }
        if (computerChoice === "rock") {
            document.getElementById("cpu-rock-tie").style.display = "block";
        } else if (computerChoice === "paper") {
            document.getElementById("cpu-paper-tie").style.display = "block";
        } else {
            document.getElementById("cpu-scissor-tie").style.display = "block";
        }
        document.getElementById("tie-area").style.display = "block";
    }

    // Update score in the UI and save it to localStorage
    updateScore();
    localStorage.setItem("playerScore", playerScore);
    localStorage.setItem("computerScore", computerScore);
}

function gamepage() {
    location.reload();
}
