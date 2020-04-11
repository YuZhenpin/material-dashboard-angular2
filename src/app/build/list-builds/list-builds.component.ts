import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Build } from '../../build';

@Component({
  selector: 'app-list-builds',
  templateUrl: './list-builds.component.html',
  styleUrls: ['./list-builds.component.css']
})
export class ListBuildsComponent implements OnInit {

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
