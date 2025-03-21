function addTask() {
    // Get the value from the input field
    const taskValue = document.getElementById('inputTask').value;

    // Check if the input is not empty
    if (taskValue.trim() === '') {
        alert('Please enter a task.');
        return; // Exit the function if the input is empty
    }

    // Create a new list item
    const newTask = document.createElement('li');
    newTask.textContent = taskValue; // Set the text content of the new list item

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        taskList.removeChild(newTask); // Remove the task when the button is clicked
    };

    // Append the delete button to the new task
    newTask.appendChild(deleteButton);

    // Append the new task to the task list
    const taskList = document.getElementById('tasklist');
    taskList.appendChild(newTask);

    // Clear the input field
    document.getElementById('inputTask').value = '';
}