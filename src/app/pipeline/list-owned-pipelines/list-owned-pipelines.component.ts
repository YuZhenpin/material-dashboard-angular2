import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../../api.service';
import { Pipeline, PipelinePager } from '../../pipeline';

const PAGE = 1;
const PAGE_SIZE = 10;

@Component({
  selector: 'app-list-owned-pipelines',
  templateUrl: './list-owned-pipelines.component.html',
  styleUrls: ['./list-owned-pipelines.component.css']
})
export class ListOwnedPipelinesComponent implements OnInit {

  pageSize = PAGE_SIZE;
  currentPage = PAGE;
  totalPages = 1;
  pager: PipelinePager;
  isLoadingResults = true;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pageSize = params.pageSize ? parseInt(params.pageSize, 10) : PAGE_SIZE;
      this.currentPage = params.page ? parseInt(params.page, 10) : PAGE;
      this.api.listPipelines(this.currentPage, this.pageSize)
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
