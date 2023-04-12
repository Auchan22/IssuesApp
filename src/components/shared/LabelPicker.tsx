import { useLabel } from '../../hooks/useLabel';
import { LoadingSpinner } from './LoadingSpinner';

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: React.FC<Props> = ({ selectedLabels, onChange }) => {
  const { labelsQuery } = useLabel();

  if (labelsQuery.isLoading) return <LoadingSpinner />;

  return (
    <div>
      {labelsQuery.data?.map((l) => (
        <span
          className={`badge rounded-pill m-1 label-picker ${
            selectedLabels.includes(l.name) ? 'label-active' : ''
          }`}
          style={{ border: `1px solid #${l.color}`, color: `#${l.color}` }}
          key={l.id}
          onClick={() => onChange(l.name)}
        >
          {l.name}
        </span>
      ))}
    </div>
  );
};
