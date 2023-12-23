document.addEventListener("DOMContentLoaded", function() {
    var addBTN = document.getElementById("add");
    var taskIN = document.getElementById("taskIN");
    var taskOUT = document.getElementById("taskOUT");

    addBTN.addEventListener("click", function() {
        var taskText = taskIN.value.trim();

        if (taskText !== "") {
            // i need this for add item
            var addTask = document.createElement("li");

            // this is to work add buttons
            taskOUT.appendChild(addTask);

            // Create a span for the task text
            var taskTextSpan = document.createElement("span");
            taskTextSpan.textContent = taskText;
            taskTextSpan.classList.add("task-text");

            // this is for delete button
            var deleteBTN = document.createElement("button");
            deleteBTN.textContent = "Delete";
            deleteBTN.classList.add("delete");

            // this is to work delete button
            addTask.appendChild(taskTextSpan);
            addTask.appendChild(deleteBTN);

            taskIN.value = "";
        }
    });

    // Event delegation for handling delete button clicks
    taskOUT.addEventListener("click", function(event) {
        var target = event.target;

        if (target.classList.contains("delete")) {
            // this is for when user click delte button li element delete
            var listItem = target.closest("li");
            listItem.remove();
        }
    });
});
