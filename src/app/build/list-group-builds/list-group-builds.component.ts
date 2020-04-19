import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../../api.service';
import { Build } from '../../build';

import { ListBuildsComponent } from '../list-builds.component';

@Component({
  selector: 'app-list-group-builds',
  templateUrl: './list-group-builds.component.html',
  styleUrls: ['./list-group-builds.component.css']
})
export class ListGroupBuildsComponent extends ListBuildsComponent {

  builds: Build[] = [];
  isLoadingResults = true;

  constructor(api: ApiService, route: ActivatedRoute, router: Router) {
    super(api, route, router);
    this.category = 'group';
  }

}