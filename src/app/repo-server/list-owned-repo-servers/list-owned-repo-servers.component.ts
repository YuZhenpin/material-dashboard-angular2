import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../../api.service';
import { RepoServer, RepoServerPager } from '../../repo-server';

const PAGE = 1;
const PAGE_SIZE = 1
@Component({
  selector: 'app-list-owned-repo-servers',
  templateUrl: './list-owned-repo-servers.component.html',
  styleUrls: ['./list-owned-repo-servers.component.css']
})
export class ListOwnedRepoServersComponent implements OnInit {

  pageSize = PAGE_SIZE;
  currentPage = PAGE;
  totalPages = 1;
  pager: RepoServerPager
  servers: RepoServer[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pageSize = params.pageSize ? parseInt(params.pageSize, 10) : PAGE_SIZE;
      this.currentPage = params.page ? parseInt(params.page, 10) : PAGE;
      this.api.listRepoServers(this.currentPage, this.pageSize)
      .subscribe((res: any) => {
        this.pager = res;
        this.totalPages = Math.ceil(this.pager.total / this.pageSize);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    })
  }

  isFirstPage(): boolean {
    return (!this.pager || this.currentPage <= 1)
  }

  isLastPage(): boolean {
    return (!this.pager || this.currentPage >= this.totalPages);
  }

  pageQueryParams(page: number): object {
    return {page: page}
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
