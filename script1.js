document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", function (e) {
        let valid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required";
            valid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = "Invalid email format";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        if (passwordInput.value.trim() === "") {
            passwordError.textContent = "Password is required";
            valid = false;
        } else {
            passwordError.textContent = "";
        }

        if (!valid) {
            e.preventDefault(); // Prevent form submission if there are errors
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const durationInput = document.getElementById("duration");
    const startButton = document.getElementById("start-button");
    const timerDisplay = document.getElementById("countdown");
    let countdownInterval;

    startButton.addEventListener("click", function () {
        const duration = parseInt(durationInput.value);
        if (!isNaN(duration)) {
            startCountdown(duration);
        }
    });

    function startCountdown(duration) {
        clearInterval(countdownInterval); // Clear any existing countdown
        let remainingTime = duration;

        function updateTimer() {
            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                timerDisplay.textContent = "Time's up!";
                return;
            }

            timerDisplay.textContent = remainingTime;
            remainingTime--;

            // Add visual cues (e.g., change background color as timer gets closer to 0)
            if (remainingTime <= 5) {
                timerDisplay.style.backgroundColor = "red";
            } else {
                timerDisplay.style.backgroundColor = "white";
            }
        }

        updateTimer(); // Call once to avoid 1-second delay
        countdownInterval = setInterval(updateTimer, 1000);
    }
});