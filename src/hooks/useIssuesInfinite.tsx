import { useInfiniteQuery } from '@tanstack/react-query';
import { Issue, State } from '../interfaces';
import { githubApi } from '../api/githubApi';
import { sleep } from '../helpers/sleep';

interface Props {
  state?: State;
  labels: string[];
  page?: number;
}

const getIssues = async ({
  labels,
  state,
  page = 1,
}: Props): Promise<Issue[]> => {
  // console.log(args);

  await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append('state', state);

  if (labels.length > 0) {
    const labelString: string = labels.join(',');
    params.append('labels', labelString);
  }

  params.append('page', page?.toString());
  params.append('per_page', '5');

  const { data } = await githubApi.get<Issue[]>('/issues', { params });

  return data;
};

export const useIssuesInfinite = ({ state, labels }: Props) => {
  const issuesQuery = useInfiniteQuery({
    queryKey: ['issues', 'infinite', { state, labels, page: 1 }],
    queryFn: (data) => getIssues(data),
    // getNextPageParam
  });

  return { issuesQuery };
};
