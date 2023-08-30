import Text from './Text';

const CardItem = ({ issue, handleClickTitle }) => {
  const { number, title, user, created_at, comments } = issue;
  const userInfo = `작성자: ${user.login}, 작성일: ${created_at}`;

  return (
    <div className="flex">
      <div className="w-full basis-3/4 p-3">
        <div>
          <Text text={`#${number}`} />
          <span
            className={`font-semibold ml-3 my-1 py-1 ${handleClickTitle && 'cursor-pointer'}`}
            onClick={handleClickTitle && handleClickTitle}
          >
            {title}
          </span>
        </div>
        <Text className="text-xs" text={userInfo} />
      </div>
      <div className="basis-1/4 flex justify-end items-center px-3">
        <Text text={`코멘트: ${comments}`} />
      </div>
    </div>
  );
};

export default CardItem;
