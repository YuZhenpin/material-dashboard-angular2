export class RepoServer {
  name: string;
  token: string;
}

export class RepoServerPager {
  total: number;
  repo_servers: RepoServer[];
}

export class GitlabServer {
  id: number;
  name: string;
  url: string;
}
