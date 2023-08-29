import { useNavigate } from 'react-router';
import Card from '../ui/Card';
import CardItem from '../ui/CardItem';

const IssueItem = ({ issue }) => {
  const navigate = useNavigate();

  const handleClickTitle = () => {
    navigate(`/issues/${issue.number}`);
  };

  return (
    <li className="list-none">
      <Card>
        <CardItem issue={issue} handleClickTitle={handleClickTitle} />
      </Card>
    </li>
  );
};

export default IssueItem;
