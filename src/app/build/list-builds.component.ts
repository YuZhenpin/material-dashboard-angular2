import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../api.service';
import { Build } from '../build';

export class ListBuildsComponent implements OnInit {

  builds: Build[] = [];
  isLoadingResults = true;
  api: ApiService;
  route: ActivatedRoute;
  router: Router;
  category = 'owned';

  constructor(api: ApiService, route: ActivatedRoute, router: Router) {
    this.api = api;
    this.route = route;
    this.router = router;
   }

  ngOnInit() {
    this.api.listBuilds()
    .subscribe((res: any) => {
      this.builds = res;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  onSelectCategory(category: any) {
    console.log(category.value);
    this.router.navigate([`builds/${category.value}`]);
  }

}
