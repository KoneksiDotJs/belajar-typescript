import { TaskManager } from './TaskManager';

const taskManager = new TaskManager();
const args = process.argv.slice(2);

// Log all arguments for debugging
console.log('Raw args:', process.argv);
console.log('Parsed args:', args);

if (args.length < 1) {
    console.log('Usage: node dist/index.js <command> [options]');
    process.exit(1);
}

const command = args[0];
const id = args[1] ? parseInt(args[1], 10) : NaN;

// Join all remaining args for description, ensuring spaces are preserved
const description = args.slice(2).join(' ');

console.log('Command:', command);
console.log('ID:', id);
console.log('Description:', description);

switch (command) {
    case 'add':
        if (description.trim()) {
            taskManager.addTask(description);
        } else {
            console.log('Description is required to add a task.');
        }
        break;
    case 'update':
        if (!isNaN(id) && description.trim()) {
            taskManager.updateTask(id, description);
        } else {
            console.log('ID and description are required to update a task.');
        }
        break;
    case 'delete':
        if (!isNaN(id)) {
            taskManager.deleteTask(id);
        } else {
            console.log('ID is required to delete a task.');
        }
        break;
    case 'mark-in-progress':
        if (!isNaN(id)) {
            taskManager.markTask(id, 'in-progress');
        } else {
            console.log('ID is required to mark a task as in-progress.');
        }
        break;
    case 'mark-done':
        if (!isNaN(id)) {
            taskManager.markTask(id, 'done');
        } else {
            console.log('ID is required to mark a task as done.');
        }
        break;
    case 'list':
        if (args[1] === 'done' || args[1] === 'todo' || args[1] === 'in-progress') {
            taskManager.listTasks(args[1] as 'done' | 'todo' | 'in-progress');
        } else {
            taskManager.listTasks();
        }
        break;
    default:
        console.log('Invalid command');
        break;
}
