import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import AppRoutes from './AppRoutes';
import PageLayout from './layout/PageLayout';
import Loading from './components/ui/Loading';

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Suspense fallback={<Loading />}>
          <AppRoutes />
        </Suspense>
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
