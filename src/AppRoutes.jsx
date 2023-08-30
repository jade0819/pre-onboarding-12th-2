import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const IssuesPage = lazy(() => import('./pages/issue/IssuesPage'));
const IssueDetailPage = lazy(() => import('./pages/issue/IssueDetailPage'));
const NotFoundPage = lazy(() => import('./pages/notFound/NotFoundPage'));

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
