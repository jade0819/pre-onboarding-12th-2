import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import AppRoutes from './AppRoutes';
import PageLayout from './layout/PageLayout';

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Suspense
          fallback={
            <div className="flex justify-center items-center text-3xl font-bold"> Loading... </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
