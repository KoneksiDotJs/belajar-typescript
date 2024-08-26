// TaskManager.ts
import { Task } from './Task';
import * as fs from 'fs';

const TASKS_FILE = './tasks.json';

export class TaskManager {
    private tasks: Task[] = [];

    constructor() {
        this.loadTasks();
    }

    private loadTasks() {
        if (fs.existsSync(TASKS_FILE)) {
            try {
                const data = fs.readFileSync(TASKS_FILE, 'utf8');
                this.tasks = JSON.parse(data);
                console.log("Tasks loaded successfully.");
            } catch (error) {
                console.error("Failed to load tasks:", error);
                this.tasks = [];
            }
        }
    }

    private saveTasks() {
        try {
            const tasksJson = JSON.stringify(this.tasks, null, 2);
            fs.writeFileSync(TASKS_FILE, tasksJson);
            console.log("Tasks saved successfully.");
            console.log("Saved tasks:", tasksJson);
        } catch (error) {
            console.error("Failed to save tasks:", error);
        }
    }

    public addTask(description: string) {
        const newTask: Task = {
            id: this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1,
            description: description,
            status: 'todo',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.tasks.push(newTask);
        console.log("Task added:", newTask);
        this.saveTasks();
        console.log(`Task added successfully (ID: ${newTask.id})`);
    }

    public updateTask(id: number, description: string) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.description = description;
            task.updatedAt = new Date().toISOString();
            this.saveTasks();
            console.log(`Task updated successfully (ID: ${task.id})`);
        } else {
            console.log(`Task not found (ID: ${id})`);
        }
    }

    public deleteTask(id: number) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.saveTasks();
        console.log(`Task deleted successfully (ID: ${id})`);
    }

    public markTask(id: number, status: 'in-progress' | 'done') {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.status = status;
            task.updatedAt = new Date().toISOString();
            this.saveTasks();
            console.log(`Task marked as ${status} (ID: ${task.id})`);
        } else {
            console.log(`Task not found (ID: ${id})`);
        }
    }

    public listTasks(status?: 'done' | 'todo' | 'in-progress') {
        const tasksToShow = status ? this.tasks.filter(t => t.status === status) : this.tasks;
        if (tasksToShow.length === 0) {
            console.log(`No tasks found with status: ${status}`);
        } else {
            console.log(`Tasks with status "${status}":`);
            tasksToShow.forEach(task => {
                console.log(`[ID: ${task.id}] ${task.description} [${task.status}] (Created: ${task.createdAt}, Updated: ${task.updatedAt})`);
            });
        }
    }
}
