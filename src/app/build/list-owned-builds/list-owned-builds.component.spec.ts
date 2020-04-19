import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOwnedBuildsComponent } from './list-owned-builds.component';

describe('ListOwnedBuildsComponent', () => {
  let component: ListOwnedBuildsComponent;
  let fixture: ComponentFixture<ListOwnedBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOwnedBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOwnedBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
