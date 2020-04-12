export class RepoServer {
  id: string;
  name: string;
}

export class RepoServerPager {
  total: number;
  repo_servers: RepoServer[];
}
