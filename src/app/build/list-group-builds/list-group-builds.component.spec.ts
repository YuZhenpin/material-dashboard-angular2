import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupBuildsComponent } from './list-group-builds.component';

describe('ListGroupBuildsComponent', () => {
  let component: ListGroupBuildsComponent;
  let fixture: ComponentFixture<ListGroupBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGroupBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
