export class RepoServer {
  id: number;
  name: string;
}

export class RepoServerPager {
  total: number;
  repo_servers: RepoServer[];
}

export class GitlabServer {
  id: number;
  name: string;
}
