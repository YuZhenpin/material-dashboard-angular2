import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOwnedRepoServersComponent } from './list-owned-repo-servers.component';

describe('ListOwnedRepoServersComponent', () => {
  let component: ListOwnedRepoServersComponent;
  let fixture: ComponentFixture<ListOwnedRepoServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOwnedRepoServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOwnedRepoServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
