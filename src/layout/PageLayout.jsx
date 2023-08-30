import Header from './Header';

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="max-w-7xl min-h-screen my-0 mx-auto p-6">{children}</main>
    </div>
  );
};

export default PageLayout;
