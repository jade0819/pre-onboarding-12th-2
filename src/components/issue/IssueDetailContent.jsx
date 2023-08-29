import ReactMarkdown from 'react-markdown';

const IssueDetailContent = ({ body }) => {
  return (
    <div className="mt-10">
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
};

export default IssueDetailContent;
