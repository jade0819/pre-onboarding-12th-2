const Text = ({ text, ...props }) => {
  return <span {...props}>{text}</span>;
};

export default Text;
