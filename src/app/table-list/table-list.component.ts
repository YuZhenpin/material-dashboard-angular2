import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Build } from '../build';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  builds: Build[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
      console.log("000")
    this.api.getBuilds()
    .subscribe((res: any) => {
      console.log("111")
      this.builds = res;
      console.log(this.builds);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
