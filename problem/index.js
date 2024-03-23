// make necessary imports

// Define the file where tasks will be stored
const tasksFile = 'tasks.txt';

// Load tasks from the file
export let tasks = [];
try {
  // assign tasks using readline module
} catch (err) {
  tasks = [];
}


export function saveTasksToFile() {
  // Save tasks to the file
}

function promptUserChoice() {
  console.log('Task Manager');
  showMenu();
  rl.question('Enter your choice (1/2/3/4/5): ', (choice) => {
    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        listTasks();
        break;
      case '3':
        markTaskAsCompleted();
        break;
      case '4':
        deleteTask();
        break;
      case '5':
        quit();
        break;
      default:
        console.log('Invalid choice. Please enter a valid option.');
        promptUserChoice();
        break;
    }
  });
}

export function showMenu() {
  console.log('1. Add Task');
  console.log('2. List Tasks');
  console.log('3. Mark Task as Completed');
  console.log('4. Delete Task');
  console.log('5. Quit');
}

// complete the below functions

export function addTask() { }

export function listTasks() { }

export function markTaskAsCompleted() { }

export function deleteTask() { }

export function quit() { }

promptUserChoice();
