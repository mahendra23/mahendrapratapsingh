import { rest } from 'msw'
import { MockGitRepos } from './data/GitReposListMock';
import { gitReposApiURL } from "../constants";

export const handlers = [
  rest.get(gitReposApiURL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(MockGitRepos),
    )
  }),
]