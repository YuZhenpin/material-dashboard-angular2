import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Pipeline } from '../../pipeline'

@Component({
  selector: 'app-list-pipelines',
  templateUrl: './list-pipelines.component.html',
  styleUrls: ['./list-pipelines.component.css']
})
export class ListPipelinesComponent implements OnInit {

  pipelines: Pipeline[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPipelines()
    .subscribe((res: any) => {
      this.pipelines = res;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
