import { useLabel } from '../../hooks/useLabel';

export const LabelPicker = () => {
  const { labelsQuery } = useLabel();

  if (labelsQuery.isLoading) return <h1>Loading</h1>;

  return (
    <div>
      {labelsQuery.data?.map((l) => (
        <span
          className='badge rounded-pill m-1 label-picker'
          style={{ border: `1px solid #${l.color}`, color: `#${l.color}` }}
          key={l.id}
        >
          {l.name}
        </span>
      ))}
    </div>
  );
};