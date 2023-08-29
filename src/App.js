import { fetchIssues as getIssues } from './api/api';

const App = () => {
  const fetchIssues = async () => {
    try {
      const fetchedIssues = await getIssues();
      console.log(fetchedIssues);
    } catch (error) {
      console.error(error.message);
    }
  };

  fetchIssues();

  return (
    <div>
      기본 세팅 완료
      <h1>husky pre-commit, pre-push 설정 적용 완료</h1>
    </div>
  );
};

export default App;
