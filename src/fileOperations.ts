import { promises as fs } from 'fs';
import { getRepoCommits, getRepoContributors } from './githubService';

const convertToCSV = (data: any[]): string => {
  try {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid data format or empty array');
    }

    const headers = Object.keys(data[0]);

    const csvContent = [
      headers.join(','),
      ...data.map(obj => {
        if (!obj) {
          throw new Error('Invalid object found in data array');
        }
        return headers.map(header => obj[header] ?? '').join(',');
      })
    ].join('\n');

    return csvContent;
  } catch (error) {
    console.error('Error converting data to CSV:', error);
    throw error;
  }
};

export const exportToCSV = async (data: any[], filename: string) => {
  try {
    const csvContent = convertToCSV(data);
    await fs.writeFile(filename, csvContent);
    console.log(`Data exported to ${filename}`);
  } catch (error) {
    console.error('Error exporting to CSV:', error);
    throw error;
  }
};

export const exportToJSON = async (data: any, filename: string) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(filename, jsonData);
    console.log(`Data exported to ${filename}`);
  } catch (error) {
    console.error('Error exporting to JSON:', error);
    throw error;
  }
};
// Example analytics functions
export const getCommitStats = (commits: any[]) => {
  return {
    totalCommits: commits.length,
    // Add more statistics as needed
  };
};

export const getContributorStats = (contributors: any[]) => {
  const totalContributors = contributors.length;
  // Calculate percentages or other insights
  return {
    totalContributors,
    // Add more statistics as needed
  };
};

export const generateInsights = async (owner: string, repo: string) => {
  const commits = await getRepoCommits(owner, repo);
  const contributors = await getRepoContributors(owner, repo);

  const commitStats = getCommitStats(commits);
  const contributorStats = getContributorStats(contributors);

  return {
    commitStats,
    contributorStats,
    // Add more insights as needed
  };
};