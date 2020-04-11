import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPipelineComponent } from './new-pipeline.component';

describe('NewPipelineComponent', () => {
  let component: NewPipelineComponent;
  let fixture: ComponentFixture<NewPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
