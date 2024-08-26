# GitHub Activity CLI

A simple command-line interface (CLI) application to fetch and display the recent activity of a GitHub user. This project is built with TypeScript and demonstrates working with APIs, handling JSON data, and creating a CLI application.

### Projects Link
https://roadmap.sh/projects/github-user-activity

## Features

- Fetch the recent activity of a specified GitHub user using the GitHub API.
- Display activities such as pushes, issues, and stars in the terminal.

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KoneksiDotJs/belajar-typescript.git
   cd github-activity-cli
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Compile TypeScript files:**

   ```bash
   npx tsc
   ```

## Usage

To fetch and display recent activity of a GitHub user, run the following command:

```bash
node dist/index.js <username>
```

Replace `<username>` with the GitHub username whose activity you want to fetch.

### Example

```bash
node dist/index.js kamranahmedse
```

### Output

The output will display recent activities such as:

- Pushed 3 commits to kamranahmedse/developer-roadmap
- Opened a new issue in kamranahmedse/developer-roadmap
- Starred kamranahmedse/developer-roadmap

## Error Handling

- **Invalid Username**: If the username does not exist or is invalid, an error message will be displayed.
- **API Errors**: Any issues with fetching data from the GitHub API will be reported.

## Code Explanation

- **`src/index.ts`**: Main TypeScript file that handles command-line arguments, fetches data from GitHub API, and displays activity in the terminal.
- **GitHub API Endpoint**: `https://api.github.com/users/<username>/events` is used to get recent events for the specified user.