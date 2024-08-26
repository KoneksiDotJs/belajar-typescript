# Task Tracker CLI

Task Tracker CLI is a simple command-line interface (CLI) application that allows you to track and manage your tasks. You can add, update, delete, and list tasks, as well as mark them as in progress or done. The tasks are stored in a JSON file in the current directory, allowing you to persist them across sessions.

### Porject Link
https://roadmap.sh/projects/task-tracker

## Features

- **Add a new task**: Create a new task with a description.
- **Update a task**: Modify the description of an existing task.
- **Delete a task**: Remove a task by its ID.
- **Mark a task as in progress**: Change the status of a task to "in-progress".
- **Mark a task as done**: Change the status of a task to "done".
- **List tasks**: Display all tasks or filter tasks by status (todo, in-progress, done).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- Basic knowledge of the command line

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KoneksiDotJs/belajar-typescript.git
   cd task-tracker-cli
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile the TypeScript code**:
   ```bash
   npx tsc
   ```

### Usage

You can interact with the Task Tracker CLI using various commands from the command line.

#### Add a new task

```bash
node dist/index.js add "Buy groceries"
```
- **Output**: `Task added successfully (ID: 1)`

#### Update an existing task

```bash
node dist/index.js update 1 "Buy groceries and cook dinner"
```
- **Output**: `Task updated successfully (ID: 1)`

#### Delete a task

```bash
node dist/index.js delete 1
```
- **Output**: `Task deleted successfully (ID: 1)`

#### Mark a task as in progress

```bash
node dist/index.js mark-in-progress 1
```
- **Output**: `Task marked as in-progress (ID: 1)`

#### Mark a task as done

```bash
node dist/index.js mark-done 1
```
- **Output**: `Task marked as done (ID: 1)`

#### List all tasks

```bash
node dist/index.js list
```
- **Output**: A list of all tasks with their status.

#### List tasks by status

- **List tasks that are done**:
  ```bash
  node dist/index.js list done
  ```

- **List tasks that are in progress**:
  ```bash
  node dist/index.js list in-progress
  ```

- **List tasks that are not done**:
  ```bash
  node dist/index.js list todo
  ```

### Task Properties

Each task is stored with the following properties:

- **id**: A unique identifier for the task.
- **description**: A short description of the task.
- **status**: The current status of the task (todo, in-progress, done).
- **createdAt**: The date and time when the task was created.
- **updatedAt**: The date and time when the task was last updated.

### File Structure

```bash
task-tracker-cli/
│
├── src/
│   ├── Task.ts           # Task model
│   ├── TaskManager.ts    # Task management logic
│   └── index.ts          # Main entry point of the CLI
│
├── tasks.json            # JSON file where tasks are stored
├── tsconfig.json         # TypeScript configuration file
└── package.json          # Node.js project metadata
```