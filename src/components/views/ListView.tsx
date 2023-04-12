import { useState } from 'react';
import { IssueList } from '../shared/IssueList';
import { LabelPicker } from '../shared/LabelPicker';

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const onLabelChange = (l: string) => {
    selectedLabels.includes(l)
      ? setSelectedLabels(selectedLabels.filter((s) => s !== l))
      : setSelectedLabels([...selectedLabels, l]);
  };

  return (
    <div className='row mt-5'>
      <div className='col-8'>
        <IssueList />
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
