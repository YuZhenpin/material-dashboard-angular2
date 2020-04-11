import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { RepoServer } from '../../repo-server'

@Component({
  selector: 'app-list-repo-servers',
  templateUrl: './list-repo-servers.component.html',
  styleUrls: ['./list-repo-servers.component.css']
})
export class ListRepoServersComponent implements OnInit {

  servers: RepoServer[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getRepoServers()
    .subscribe((res: any) => {
      this.servers = res;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
