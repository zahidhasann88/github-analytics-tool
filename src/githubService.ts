import axios from 'axios';
import { logger } from './logger';

const BASE_URL = 'https://api.github.com';

axios.defaults.headers.common['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;

export const getRepoDetails = async (owner: string, repo: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}`);
    logger.info(`Fetched repository details for ${owner}/${repo}`);
    return response.data;
  } catch (error) {
    logger.error(`Error fetching repository details: ${(error as Error).message}`);
    throw new Error(`Error fetching repository details: ${(error as Error).message}`);
  }
};

export const getRepoContributors = async (owner: string, repo: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}/contributors`);
    logger.info(`Fetched repository contributors for ${owner}/${repo}`);
    return response.data;
  } catch (error) {
    logger.error(`Error fetching repository contributors: ${(error as Error).message}`);
    throw new Error(`Error fetching repository contributors: ${(error as Error).message}`);
  }
};

export const getRepoIssues = async (owner: string, repo: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}/issues`);
    logger.info(`Fetched repository issues for ${owner}/${repo}`);
    return response.data;
  } catch (error) {
    logger.error(`Error fetching repository issues: ${(error as Error).message}`);
    throw new Error(`Error fetching repository issues: ${(error as Error).message}`);
  }
};

export const getRepoCommits = async (owner: string, repo: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}/commits`);
    logger.info(`Fetched repository commits for ${owner}/${repo}`);
    return response.data;
  } catch (error) {
    logger.error(`Error fetching repository commits: ${(error as Error).message}`);
    throw new Error(`Error fetching repository commits: ${(error as Error).message}`);
  }
};
