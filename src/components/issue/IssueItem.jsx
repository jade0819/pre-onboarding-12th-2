import { useNavigate } from 'react-router';
import Card from '../ui/Card';
import Text from '../ui/Text';

const IssueItem = ({ issue: { number, title, user, created_at, comments } }) => {
  const navigate = useNavigate();

  const userInfo = `작성자: ${user.login}, 작성일: ${created_at}`;

  const handleClickTitle = () => {
    navigate(`/issues/${number}`);
  };

  return (
    <li className="list-none">
      <Card>
        <div className="basis-3/4 p-3">
          <div>
            <Text text={`#${number}`} />
            <span
              className="font-semibold ml-3 my-1 py-1 cursor-pointer"
              onClick={handleClickTitle}
            >
              {title}
            </span>
          </div>
          <Text className="text-xs" text={userInfo} />
        </div>
        <div className="basis-1/4 flex justify-end items-center px-3">
          <Text text={`코멘트: ${comments}`} />
        </div>
      </Card>
    </li>
  );
};

export default IssueItem;
