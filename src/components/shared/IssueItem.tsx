import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { Issue, State } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { getIssueComments, getIssueInfo } from '../../hooks/useIssue';

interface Props {
  data: Issue;
}

export const IssueItem: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Prefetch al hacer hover
  const prefetchData = () => {
    queryClient.prefetchQuery(['issue', data.number], () =>
      getIssueInfo(data.number),
    );
    queryClient.prefetchQuery(['issue', data.number, 'comments'], () =>
      getIssueComments(data.number),
    );
  };

  //Queremos que la información ya este en caché
  const presetData = () => {
    queryClient.setQueryData(['issue', data.number], data, {
      updatedAt: new Date().getTime() + 100000,
    });
  };

  return (
    <div
      className='card mb-2 issue'
      onClick={() => navigate(`/issues/issue/${data.number}`)}
      // onMouseEnter={prefetchData}
      onMouseEnter={presetData}
    >
      <div className='card-body d-flex align-items-center'>
        {data.state === State.OPEN ? (
          <FiInfo size={30} color='red' />
        ) : (
          <FiCheckCircle size={30} color='green' />
        )}

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
