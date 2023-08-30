import { Link } from 'react-router-dom';

const Error = ({ error, type }) => {
  const errorMsg = error?.message;
  const errorStatus = error?.response?.status;

  return (
    <div className="h-screen flex flex-col items-center pt-36 text-gray-700">
      <h1 className="mb-4">{errorStatus}</h1>
      <h2>{errorMsg}</h2>
      <Link to="/" className="mt-16 p-3 font-semibold text-white bg-brand rounded-md">
        {type === 'list' ? '다시 시도' : '목록으로 이동'}
      </Link>
    </div>
  );
};

export default Error;
