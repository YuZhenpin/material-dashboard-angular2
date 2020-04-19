export class RepoServer {
  id: number;
  url: string;
  type: string;
  name: string;
  token: string;
}

export class RepoServerPager {
  total: number;
  repo_servers: RepoServer[];
}

export class GitlabServer {
  id: number;
  url: string;
  type: string;
  name: string;
}
