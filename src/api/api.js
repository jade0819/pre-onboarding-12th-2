import { Octokit, RequestError } from 'octokit';

export const fetchIssues = async () => {
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });

  const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'facebook',
    repo: 'react',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return response.data;
};

////////////////////////////

// const ownerRepo = 'facebook/react';

// export const requestReposIssues = () => {
//   fetch(`https://api.github.com/repos/${ownerRepo}/issues`, {
//     headers: {
//       Accept: 'application/vnd.github.v3+json',
//       Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       // formatResults(data);
//       return data;
//     })
//     .catch(error => console.error(error));
// };
