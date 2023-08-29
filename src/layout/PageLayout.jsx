import Header from './Header';

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
