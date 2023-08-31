const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-start pt-[190px] ">
      <img src={process.env.PUBLIC_URL + '/images/loading-spinner-200px.gif'} />
    </div>
  );
};

export default Loading;
