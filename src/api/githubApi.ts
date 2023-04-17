import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization:
      'Bearer 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',
  },
});
