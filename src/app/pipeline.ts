import {RepoServer} from './repo-server';

export class Pipeline {
  id: number;
  name: string;
  repo_server: RepoServer
}

export class PipelinePager {
  total: number;
  pipelines: Pipeline[];
}
