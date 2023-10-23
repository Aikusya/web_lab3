document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create a new list item with Bootstrap styles
            const listItem = document.createElement("li");
            listItem.className = "list-group-item d-flex justify-content-between align-items-center";

            // Task text
            const taskTextElement = document.createElement("span");
            taskTextElement.textContent = taskText;
            listItem.appendChild(taskTextElement);

            // Delete button
            const deleteButton = document.createElement("button");
            deleteButton.className = "btn btn-danger";
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });

            // Mark as complete button
            const completeButton = document.createElement("button");
            completeButton.className = "btn btn-dark";
            completeButton.textContent = "Complete";
            completeButton.addEventListener("click", function () {
                taskTextElement.classList.toggle("text-decoration-line-through");
            });

            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);

            taskList.appendChild(listItem);

            taskInput.value = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const showAlertButton = document.getElementById("showAlert");
    const showNotificationButton = document.getElementById("showNotification");

    showAlertButton.addEventListener("click", function () {
        // Create an alert using Bootstrap classes
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-danger alert-dismissible fade show";
        alertDiv.textContent = "This is an alert message.";

        const closeButton = document.createElement("button");
        closeButton.className = "close";
        closeButton.innerHTML = "&times;";
        closeButton.setAttribute("data-dismiss", "alert");

        alertDiv.appendChild(closeButton);

        // Append the alert to the container
        document.querySelector(".container").appendChild(alertDiv);
    });

    showNotificationButton.addEventListener("click", function () {
        // Create a notification using Bootstrap classes
        const notificationDiv = document.createElement("div");
        notificationDiv.className = "alert alert-success";
        notificationDiv.textContent = "This is a notification message.";

        // Append the notification to the container
        document.querySelector(".container").appendChild(notificationDiv);
    });
});