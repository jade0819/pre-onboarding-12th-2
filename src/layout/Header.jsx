import { Link } from 'react-router-dom';
import { OWNER, REPO } from '../constants/issuesData';

const Header = () => {
  return (
    <div className="w-full h-24 flex justify-center items-center bg-black border-b border-b-gray-200">
      <Link to="/" className="text-white no-underline cursor-pointer">
        <h1>
          {OWNER} / {REPO}
        </h1>
      </Link>
    </div>
  );
};

export default Header;
