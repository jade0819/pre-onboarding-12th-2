const Card = ({ children }) => {
  return (
    <div className="py-3 border-b border-b-gray-300">
      <div className="flex">{children}</div>
    </div>
  );
};

export default Card;
