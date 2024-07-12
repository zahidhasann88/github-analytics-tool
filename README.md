# GitHub Analytics Tool

This tool allows you to fetch and analyze data from GitHub repositories. You can fetch repository details, contributors, issues, commit history, export data to CSV or JSON files, and generate insights based on the fetched data.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd github-analytics-tool
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3.Set up your GitHub token:
   Create a .env file in the root directory
   Add your GitHub token:
   ```bash
   GITHUB_TOKEN=your-github-token
   ```

## Usage
Fetching Data
Fetching Repository Details
    ```bash
    npx ts-node src/index.ts --owner <owner> --repo <repo> --details
    ```

Fetching Repository Contributors
    ```bash
    npx ts-node src/index.ts --owner <owner> --repo <repo> --contributors
    ```

Fetching Repository Issues
    ```bash
    npx ts-node src/index.ts --owner <owner> --repo <repo> --issues
    ```
Fetching Repository Commit History
    ```bash
    npx ts-node src/index.ts --owner <owner> --repo <repo> --commits
    ```
Fetching Multiple Data Types Simultaneously
    ```bash
    npx ts-node src/index.ts --owner <owner> --repo <repo> --details --contributors --issues --commits
    ```
## Exporting Data
### Exporting to CSV
    ```bash
    npx ts-node src/index.ts --owner <owner> --repo <repo> --details --export output.csv
    ```
# Exporting to Json
    ```bash
    npx ts-node src/index.ts --owner <owner> --repo <repo> --details --export json
    ```
## Generating Insights
### Generating Insights
#### Exporting to CSV
    ```bash
    npx ts-node src/index.ts --owner <owner> --repo <repo> --insights
    ```

## API Endpoint
The tool uses GitHub's API endpoint:
    ```bash
    https://api.github.com
    ```
Additional Commands
Linting TypeScript Files
```bash
npm run lint
```
Running Tests (Jest)
```bash
npx jest
```

Notes
Ensure your GitHub token is properly set in the .env file for authentication.
Replace <repository-url>, <owner>, <repo>, and your-github-token with your actual repository URL, GitHub owner, repository name, and GitHub token respectively.

```bash
This README.md file provides comprehensive instructions for installation, usage, API endpoint details, additional commands for linting and testing, and notes for configuring the GitHub token. Adjust the placeholders `<repository-url>`, `<owner>`, `<repo>`, and `your-github-token` with your specific repository information and token.
```