document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
                <button class="complete">Complete</button>
            `;
            pendingTasksList.appendChild(li);

            taskInput.value = "";

            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", deleteTask);

            const completeButton = li.querySelector(".complete");
            completeButton.addEventListener("click", completeTask);
        }
    }

    function deleteTask() {
        this.parentElement.remove();
    }

    function completeTask() {
        const taskItem = this.parentElement;
        taskItem.classList.toggle("completed");
        this.textContent = "Uncomplete";
        this.classList.toggle("uncomplete");
        this.removeEventListener("click", completeTask);
        this.addEventListener("click", uncompleteTask);
        completedTasksList.appendChild(taskItem);
    }

    function uncompleteTask() {
        const taskItem = this.parentElement;
        taskItem.classList.toggle("completed");
        this.textContent = "Complete";
        this.classList.toggle("complete");
        this.removeEventListener("click", uncompleteTask);
        this.addEventListener("click", completeTask);
        pendingTasksList.appendChild(taskItem);
    }
});
