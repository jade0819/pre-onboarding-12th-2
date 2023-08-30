import { useNavigate } from 'react-router';
import Card from '../ui/Card';
import CardItem from '../ui/CardItem';

const IssueItem = ({ mesureRef, issue, index }) => {
  const navigate = useNavigate();
  const fifthIndexFlag = index % 4 === 0 && index !== 0 ? true : false;
  const adImageUrl =
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';
  const wantedUrl = 'https://www.wanted.co.kr/jobsfeed';

  const handleClickTitle = () => {
    const id = issue.number;
    navigate(`/issues/${id}`, { state: { id } });
  };

  return (
    <li className="list-none" ref={mesureRef}>
      {fifthIndexFlag && (
        <div
          onClick={() => window.open(wantedUrl)}
          className="h-[97px] flex justify-center items-center border-b border-b-gray-300 cursor-pointer"
        >
          <img src={adImageUrl} alt="AD wanted image" />
        </div>
      )}
      <Card>{issue && <CardItem issue={issue} handleClickTitle={handleClickTitle} />}</Card>
    </li>
  );
};

export default IssueItem;
