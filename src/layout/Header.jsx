import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full h-24 flex justify-center items-center bg-brand-gray border-b border-b-gray-200">
      <Link to="/" className="text-2xl font-semibold text-brand cursor-pointer">
        <h1>Facebook / react</h1>
      </Link>
    </div>
  );
};

export default Header;
