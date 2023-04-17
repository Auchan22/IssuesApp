import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { Issue } from '../../interfaces';

interface Props {
  data: Issue;
}

export const IssueItem: React.FC<Props> = ({ data }) => {
  return (
    <div className='card mb-2 issue'>
      <div className='card-body d-flex align-items-center'>
        <FiInfo size={30} color='red' />
        {/* <FiCheckCircle size={30} color="green" /> */}

        <div className='d-flex flex-column flex-fill px-2'>
          <span>{data.title}</span>
          <span className='issue-subinfo'>
            #{data.number} opened 2 days ago by{' '}
            <span className='fw-bold'>{data.user.login}</span>
          </span>
        </div>

        <div className='d-flex align-items-center'>
          <img
            src={data.user.avatar_url}
            alt='User Avatar'
            className='avatar'
          />
          <span className='px-2'>{data.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
