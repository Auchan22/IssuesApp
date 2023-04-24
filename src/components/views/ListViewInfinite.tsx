import { useState } from 'react';
import { IssueList } from '../shared/IssueList';
import { LabelPicker } from '../shared/LabelPicker';
import { useIssues } from '../../hooks';
import { LoadingSpinner } from '../shared/LoadingSpinner';
import { State } from '../../interfaces';

export const ListViewInfinite = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const [state, setState] = useState<State>();

  const { issuesQuery } = useIssues({
    state,
    labels: selectedLabels,
  });

  const onLabelChange = (l: string) => {
    selectedLabels.includes(l)
      ? setSelectedLabels(selectedLabels.filter((s) => s !== l))
      : setSelectedLabels([...selectedLabels, l]);
  };

  return (
    <div className='row mt-5'>
      <div className='col-8'>
        {issuesQuery.isLoading ? (
          <LoadingSpinner />
        ) : (
          <IssueList
            issues={issuesQuery.data || []}
            state={state}
            onStateChange={(newState) => setState(newState)}
          />
        )}

        <div className='d-flex mt-2 justify-content-between alignt-items-center'>
          <button
            className='btn btn-outline-primary'
            disabled={issuesQuery.isFetching}
            onClick={loadMore}
          >
            Ver más...
          </button>
        </div>
      </div>

      <div className='col-4'>
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName: string) => onLabelChange(labelName)}
        />
      </div>
    </div>
  );
};
