import { Octokit } from 'octokit';

// TODO: open 상태의 이슈 가져오기, 코멘트 순으로 정렬해서 가져오기
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
