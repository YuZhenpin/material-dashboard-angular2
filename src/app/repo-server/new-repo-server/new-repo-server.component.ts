import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../../api.service';
import { GitlabServer, RepoServer, RepoServerPager } from '../../repo-server'

@Component({
  selector: 'app-new-repo-server',
  templateUrl: './new-repo-server.component.html',
  styleUrls: ['./new-repo-server.component.css']
})
export class NewRepoServerComponent implements OnInit {
  name = '';
  token = '';
  serverId: number;
  tokenUrl: string;
  isCompleted = false;
  isLoadingResults = true;
  gitlabServers: GitlabServer[] = [];

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.api.listGitlabServers()
      .subscribe((res: any) => {
        this.gitlabServers = res;
        this.setDefaultServer();
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    })
  }

  setDefaultServer() {
    if (this.gitlabServers && this.gitlabServers.length > 0) {
      this.setGitlabServer(this.gitlabServers[0]);
    }
  }

  setGitlabServer(server: GitlabServer) {
    this.serverId = server.id;
    this.tokenUrl = server.url;
  }

  onSelectServer(e: any) {
    this.setGitlabServer(this.gitlabServers[this.serverId]);
  }

  checkCompletion() {
    if (this.serverId && this.name && this.token) {
      this.isCompleted = true
    } else {
      this.isCompleted = false;
    }
    console.log(this.isCompleted);
  }

  doCreate() {
    console.log(`server: ${this.serverId}`)
    console.log(`name: ${this.name}`)
    console.log(`token: ${this.token}`)
    const server: RepoServer = {
      name: this.name,
      token: this.token,
    }

    this.api.createRepoServer(server)
      .subscribe((res: any) => {
      console.log("vvvvvvv");
        console.log(res);
        this.router.navigate(["/repo-servers"]);
    }, err => {
      console.log("xxxxxxx");
      console.log(err);
    });
  }

}
