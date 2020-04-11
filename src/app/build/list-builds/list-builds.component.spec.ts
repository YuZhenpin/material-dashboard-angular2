import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuildsComponent } from './list-builds.component';

describe('ListBuildsComponent', () => {
  let component: ListBuildsComponent;
  let fixture: ComponentFixture<ListBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
