import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../../api.service';
import { Build } from '../../build';

import { ListBuildsComponent } from '../list-builds.component';

@Component({
  selector: 'app-list-owned-builds',
  templateUrl: './list-owned-builds.component.html',
  styleUrls: ['./list-owned-builds.component.css']
})
export class ListOwnedBuildsComponent extends ListBuildsComponent {

  builds: Build[] = [];
  isLoadingResults = true;

  constructor(api: ApiService, route: ActivatedRoute, router: Router) {
    super(api, route, router);
    this.category = 'owned';
  }

}
