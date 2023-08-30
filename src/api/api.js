// import api from './axios';

// export const getIssues = async page => {
//   const response = await api.get(`/issues?per_page=10&page=${page}&state=open&sort=comments`);
//   return response.data;
// };

// export const getIssueItem = async id => {
//   const response = await api.get(`/issues/${id}`);
//   return response.data;
// };

import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

export const getIssues = async () => {
  const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'facebook',
    repo: 'react',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return response.data;
};

export const getIssueItem = async id => {
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
