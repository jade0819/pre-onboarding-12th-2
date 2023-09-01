import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import PageLayout from './layout/PageLayout';

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <AppRoutes />
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
