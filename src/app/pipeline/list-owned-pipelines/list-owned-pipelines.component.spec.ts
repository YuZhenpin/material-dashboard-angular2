import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOwnedPipelinesComponent } from './list-owned-pipelines.component';

describe('ListOwnedPipelinesComponent', () => {
  let component: ListOwnedPipelinesComponent;
  let fixture: ComponentFixture<ListOwnedPipelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOwnedPipelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOwnedPipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
