import { Command } from 'commander';
import { config } from 'dotenv';
import axios from 'axios';
import { getRepoDetails, getRepoContributors, getRepoCommits, getRepoIssues } from './githubService';
import { exportToCSV, exportToJSON } from './fileOperations';
import { generateInsights } from './insights';

config();

const program = new Command();

program
  .version('1.0.0')
  .description('GitHub Analytics Tool')
  .requiredOption('-o, --owner <owner>', 'Repository owner')
  .requiredOption('-r, --repo <repo>', 'Repository name')
  .option('-d, --details', 'Get repository details')
  .option('-c, --contributors', 'Get repository contributors')
  .option('-m, --commits', 'Get repository commit history')
  .option('-i, --issues', 'Get repository issues')
  .option('--insights', 'Generate insights based on fetched data')
  .option('-e, --export <format>', 'Export data to CSV or JSON (csv/json)')
  .parse(process.argv);

const options = program.opts();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  console.error('GitHub token not found. Make sure it is set in the .env file.');
  process.exit(1);
}

axios.defaults.headers.common['Authorization'] = `token ${GITHUB_TOKEN}`;

const run = async () => {
  try {
    if (options.details) {
      const details = await getRepoDetails(options.owner, options.repo);
      console.log('Repository Details:', details);
      if (options.export === 'csv') {
        await exportToCSV([details], 'output.csv');
      } else if (options.export === 'json') {
        await exportToJSON(details, 'output.json');
      } else {
        console.error('Unsupported export format. Use "csv" or "json".');
      }
      
      const insights = await generateInsights(options.owner, options.repo);
      console.log('Repository Insights:', insights);
    }

    if (options.contributors) {
      const contributors = await getRepoContributors(options.owner, options.repo);
      console.log('Repository Contributors:', contributors);
      if (options.export === 'csv') {
        await exportToCSV([contributors], 'output.csv');
      } else if (options.export === 'json') {
        await exportToJSON(contributors, 'output.json');
      } else {
        console.error('Unsupported export format. Use "csv" or "json".');
      }
    }

    if (options.commits) {
      const commits = await getRepoCommits(options.owner, options.repo);
      console.log('Repository Commits:', commits);
      if (options.export === 'csv') {
        await exportToCSV([commits], 'output.csv');
      } else if (options.export === 'json') {
        await exportToJSON(commits, 'output.json');
      } else {
        console.error('Unsupported export format. Use "csv" or "json".');
      }
    }

    if (options.issues) {
      const issues = await getRepoIssues(options.owner, options.repo);
      console.log('Repository Issues:', issues);
      if (options.export === 'csv') {
        await exportToCSV([issues], 'output.csv');
      } else if (options.export === 'json') {
        await exportToJSON(issues, 'output.json');
      } else {
        console.error('Unsupported export format. Use "csv" or "json".');
      }
    }

    if (options.insights) {
      const insights = await generateInsights(options.owner, options.repo);
      console.log('Repository Insights:', insights);
    }

  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

run();
