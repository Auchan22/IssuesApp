import { Issue, State } from '../../interfaces';
import { IssueItem } from './IssueItem';

interface Props {
  issues: Issue[];
  state?: State;
  onStateChange: (newState?: State) => void;
}

export const IssueList: React.FC<Props> = ({
  issues,
  onStateChange,
  state,
}) => {
  return (
    <div className='card border-white'>
      <div className='card-header bg-dark'>
        <ul className='nav nav-pills card-header-pills'>
          <li className='nav-item' onClick={() => onStateChange(undefined)}>
            <a className={`nav-link ${!state ? 'active' : ''}`}>All</a>
          </li>
          <li className='nav-item' onClick={() => onStateChange(State.OPEN)}>
            <a className={`nav-link ${state === State.OPEN ? 'active' : ''}`}>
              Open
            </a>
          </li>
          <li className='nav-item' onClick={() => onStateChange(State.CLOSED)}>
            <a className={`nav-link ${state === State.CLOSED ? 'active' : ''}`}>
              Closed
            </a>
          </li>
        </ul>
      </div>
      <div className='card-body text-dark'>
        {issues.map((issue) => (
          <IssueItem key={issue.id} data={issue} />
        ))}
      </div>
    </div>
  );
};
