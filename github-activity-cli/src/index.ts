import fetch from "node-fetch";

// GitHub API URL
const API_URL = "https://api.github.com/users/{username}/events";

// Function to fetch GitHub user activity
async function fetchGitHubActivity(username: string): Promise<void> {
  const url = API_URL.replace("{username}", username);

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "github-activity-cli",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const events:any = await response.json();

    if (events.length === 0) {
      console.log(`No recent activity found for user ${username}.`);
      return;
    }

    // Display recent activities
    events.forEach((event: any) => {
      const type = event.type;
      const repo = event.repo.name;
      let action = "";

      switch (type) {
        case "PushEvent":
          action = `Pushed ${event.payload.commits.length} commits to ${repo}`;
          break;
        case "IssuesEvent":
          action = `Opened a new issue in ${repo}`;
          break;
        case "WatchEvent":
          action = `Starred ${repo}`;
          break;
        case "PullRequestEvent":
          action = `Opened a pull request in ${repo}`;
          break;
        case "IssueCommentEvent":
          action = `Commented on an issue in ${repo}`;
          break;
        default:
          action = `Performed an action (${type}) on ${repo}`;
          break;
      }

      console.log(action);
    });
  } catch (error:any) {
    console.error(`Error fetching GitHub activity: ${error.message}`);
  }
}

// Get command line arguments
const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log("Usage: github-activity <username>");
  process.exit(1);
}

const username = args[0];
fetchGitHubActivity(username);
