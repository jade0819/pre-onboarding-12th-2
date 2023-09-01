import { Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/notFound/NotFoundPage';
import IssueDetailPage from './pages/issue/IssueDetailPage';
import IssuesPage from './pages/issue/IssuesPage';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/issues" />} />
      <Route path="/issues" element={<IssuesPage />} />
      <Route path="/issues/:id" element={<IssueDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoute;
