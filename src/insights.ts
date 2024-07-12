import { getRepoCommits, getRepoContributors } from './githubService';

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
  try {
    const commits = await getRepoCommits(owner, repo);
    const contributors = await getRepoContributors(owner, repo);

    const commitStats = getCommitStats(commits);
    const contributorStats = getContributorStats(contributors);

    // Additional insights or statistics
    const insights = {
      commitStats,
      contributorStats,
      // Add more insights as needed
    };

    return insights;
  } catch (error) {
    throw new Error(`Error generating insights: ${(error as Error).message}`);
  }
};
