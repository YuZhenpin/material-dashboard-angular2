import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupPipelinesComponent } from './list-group-pipelines.component';

describe('ListGroupPipelinesComponent', () => {
  let component: ListGroupPipelinesComponent;
  let fixture: ComponentFixture<ListGroupPipelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGroupPipelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupPipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
