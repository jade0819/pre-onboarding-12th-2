import ReactMarkdown from 'react-markdown';
import '../../markdown.css';

const IssueDetailContent = ({ body }) => {
  return (
    <div className="markdown mt-10">
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
};

export default IssueDetailContent;
