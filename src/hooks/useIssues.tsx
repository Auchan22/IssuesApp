import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { githubApi } from '../api/githubApi';
import { Issue, State } from '../interfaces';
import { sleep } from '../helpers/sleep';

interface Props {
  state?: State;
  labels: string[];
}

const getIssues = async (labels: string[], state?: State): Promise<Issue[]> => {
  // console.log(args);

  await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append('state', state);

  if (labels.length > 0) {
    const labelString: string = labels.join(',');
    params.append('labels', labelString);
  }

  params.append('page', '1');
  params.append('per_page', '5');

  const { data } = await githubApi.get<Issue[]>('/issues', { params });

  return data;
};

export const useIssues = ({ state, labels }: Props) => {
  // Por medio de los {}, podemos definir keys, pero sin importar el orden, ya que va a saber a cual elemento apunta
  const issuesQuery = useQuery({
    queryKey: ['issues', { labels, state }],
    queryFn: () => getIssues(labels, state),
  });

  return { issuesQuery };
};
