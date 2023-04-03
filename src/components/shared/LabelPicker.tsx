import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';

interface Label {
  color: string;
  default: boolean;
  description?: string;
  id: number;
  name: string;
  node_id: string;
  url: string;
}

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels');

  return data;
};

export const LabelPicker = () => {
  const labelsQuery = useQuery(['labels'], getLabels, {
    refetchOnWindowFocus: false,
  });

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
