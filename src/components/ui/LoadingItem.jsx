const LoadingItem = () => {
  return (
    <div className="w-full flex justify-center items-center mt-6">
      <img
        src={process.env.PUBLIC_URL + '/images/refresh-icon.png'}
        className="w-6 h-6 spin__animation"
      />
    </div>
  );
};

export default LoadingItem;
