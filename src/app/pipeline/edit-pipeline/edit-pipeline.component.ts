import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { ApiService } from '../../api.service';
import { Pipeline } from '../../pipeline';

@Component({
  selector: 'app-edit-pipeline',
  templateUrl: './edit-pipeline.component.html',
  styleUrls: ['./edit-pipeline.component.css']
})
export class EditPipelineComponent implements OnInit {
  id: number;
  pipeline: Pipeline;
  isLoadingResults = true
  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.api.getPipelineById(this.id)
        .subscribe((res: any) => {
          this.pipeline = res;
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
    })
  }

  onNameChanged(e: any) {
    this.pipeline.name = e.target.value;
  }

  onSubmit() {
    console.log("Update it.");
  }

  onDelete() {
    if (confirm("Are you sure to delete " + this.pipeline.name)) {
      this.api.deletePipeline(this.id)
        .subscribe((res: any) => {
        this.router.navigate(["/pipelines"])
      }, err => {
        console.log(err);
      });
    }
  }
}
