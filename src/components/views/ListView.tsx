import { IssueList } from '../shared/IssueList';
import { LabelPicker } from '../shared/LabelPicker';

export const ListView = () => {
  return (
    <div className='row mt-5'>
      <div className='col-8'>
        <IssueList />
      </div>

      <div className='col-4'>
        <LabelPicker />
      </div>
    </div>
  );
};
