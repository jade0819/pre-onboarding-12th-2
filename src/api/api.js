import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

export const getIssues = async (perPage, page) => {
  const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'facebook',
    repo: 'react',
    state: 'open',
    sort: 'comments',
    page: page,
    per_page: perPage,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return response.data;
};

export const getIssueDetail = async id => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });

  const response = await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
    owner: 'facebook',
    repo: 'react',
    issue_number: id,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return response.data;
};
