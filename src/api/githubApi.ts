import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization:
      'Bearer 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',
  },
});
