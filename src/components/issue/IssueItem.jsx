import { useNavigate } from 'react-router';
import Card from '../ui/Card';
import CardItem from '../ui/CardItem';
import { AD_IMAGE_URL, WANTED_URL } from '../../constants/issuesData';

const IssueItem = ({ mesureRef, issue, index }) => {
  const navigate = useNavigate();
  const fifthIndexFlag = index % 4 === 0 && index !== 0 ? true : false;

  const handleClickTitle = () => {
    const id = issue.number;
    navigate(`/issues/${id}`, { state: { id } });
  };

  return (
    <li className="list-none" ref={mesureRef}>
      {fifthIndexFlag && (
        <div
          onClick={() => window.open(WANTED_URL)}
          className="h-[97px] flex justify-center items-center border-b border-b-gray-300 cursor-pointer"
        >
          <img src={AD_IMAGE_URL} alt="AD wanted image" />
        </div>
      )}
      <Card>{issue && <CardItem issue={issue} handleClickTitle={handleClickTitle} />}</Card>
    </li>
  );
};

export default IssueItem;
