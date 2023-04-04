import { useQuery } from '@tanstack/react-query';
import { Label } from '../interfaces/Label';
import { githubApi } from '../api/githubApi';
import { sleep } from '../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);

  const { data } = await githubApi.get<Label[]>('/labels');

  return data;
};

export const useLabel = () => {
  const labelsQuery = useQuery(['labels'], getLabels, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });
  return { labelsQuery };
};
