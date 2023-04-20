import { useQuery } from '@tanstack/react-query';
import { Label } from '../interfaces/Label';
import { githubApi } from '../api/githubApi';
import { sleep } from '../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);

  const { data } = await githubApi.get<Label[]>('/labels?per_page=100', {
    headers: {
      Authorization: null,
    },
  });

  return data;
};

export const useLabel = () => {
  const labelsQuery = useQuery(['labels'], getLabels, {
    refetchOnWindowFocus: false,
    // staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 717031390,
        node_id: 'MDU6TGFiZWw3MTcwMzEzOTA=',
        url: 'https://api.github.com/repos/facebook/react/labels/good%20first%20issue',
        name: 'good first issue',
        color: '6ce26a',
        default: true,
      },
      {
        id: 1757816973,
        node_id: 'MDU6TGFiZWwxNzU3ODE2OTcz',
        url: 'https://api.github.com/repos/facebook/react/labels/dependencies',
        name: 'dependencies',
        color: '0366d6',
        default: false,
        description: 'Pull requests that update a dependency file',
      },
    ],
  });
  return { labelsQuery };
};
