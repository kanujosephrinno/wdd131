// Rise & Overcome - Shared JavaScript

// 1. Display the current year in the footer.
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 2. Encouraging messages for the homepage.
const encouragementMessages = [
    {
        message: "You do not need to have everything figured out today. Take one small step forward.",
        category: "hope"
    },
    {
        message: "Your challenges do not define your future. Keep believing in your ability to grow.",
        category: "growth"
    },
    {
        message: "Progress takes time. Be patient with yourself and celebrate every small victory.",
        category: "growth"
    },
    {
        message: "A difficult day does not mean you have a difficult future.",
        category: "hope"
    },
    {
        message: "You can learn from setbacks and use those lessons to become stronger.",
        category: "growth"
    },
    {
        message: "When life feels overwhelming, pause, breathe, and focus on the next step.",
        category: "calm"
    },
    {
        message: "Keep hope alive. Even small steps can lead to meaningful change.",
        category: "hope"
    }
];
// 3. Find the homepage encouragement elements.
const encouragementText = document.querySelector("#encouragement");
const encouragementButton = document.querySelector("#encouragement-button");

// 4. Run the encouragement feature only when its elements exist.
if (encouragementText && encouragementButton) {
    encouragementButton.addEventListener("click", function () {
        const hopeMessages = encouragementMessages.filter(function (item) {
            return item.category === "hope";
        });

        if (hopeMessages.length === 0) {
            encouragementText.textContent = "Keep going. Your next step matters.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * hopeMessages.length);
        encouragementText.textContent = hopeMessages[randomIndex].message;
    });
}

// 5. Find the personal reflection elements on growth.html.
const goalForm = document.querySelector("#goal-form");
const goalInput = document.querySelector("#daily-goal");
const saveMessage = document.querySelector("#save-message");

if (goalForm && goalInput && saveMessage) {
    // Restore the saved goal when the page opens.
    goalInput.value = localStorage.getItem("dailyGoal") || "";

    // Save the goal when the form is submitted.
    goalForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const goal = goalInput.value.trim();

        if (goal === "") {
            saveMessage.textContent =
                "Please write a goal before saving.";
            return;
        }

        localStorage.setItem("dailyGoal", goal);

        saveMessage.textContent =
            `Your goal has been saved: ${goal}`;
    });
}