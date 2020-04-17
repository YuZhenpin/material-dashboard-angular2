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
  gitlabServers: GitlabServer[] = [];
  serverId: number;
  isLoadingResults = true;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.api.listGitlabServers()
      .subscribe((res: any) => {
        this.gitlabServers = res;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    })
  }

  onCreate() {
    console.log(`server: ${this.serverId}`)
    console.log(`name: ${this.name}`)
    console.log(`token: ${this.token}`)
  }

}
