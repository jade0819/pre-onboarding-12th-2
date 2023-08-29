import api from './axios';

export const getIssues = async () => {
  const response = await api.get('/issues?per_page=10&state=open&sort=comments&page=1');
  return response.data;
};

export const getIssueItem = async id => {
  const response = await api.get(`/issues/${id}`);
  return response.data;
};
