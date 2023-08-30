import api from './axios';

export const getIssues = async page => {
  const response = await api.get(`/issues?per_page=10&page=${page}&state=open&sort=comments`);
  return response.data;
};

export const getIssueItem = async id => {
  const response = await api.get(`/issues/${id}`);
  return response.data;
};
