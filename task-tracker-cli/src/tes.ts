import * as fs from 'fs';

const TASKS_FILE = './tasks.json';

const task = {
    id: 3,
    description: "Test task",
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};

const tasks = [task];

fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
console.log("Tasks written to file");
