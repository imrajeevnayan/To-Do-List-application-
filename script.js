function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    if (taskInput.value === '') {
        alert('Please enter a task.');
        return;
    }

    var li = document.createElement('li');
    li.textContent = taskInput.value;

    li.addEventListener('click', function() {
        if (li.classList.contains('completed')) {
            li.classList.remove('completed');
        } else {
            li.classList.add('completed');
        }
    });

    li.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = '';
}
