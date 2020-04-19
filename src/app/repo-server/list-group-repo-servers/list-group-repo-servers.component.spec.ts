import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupRepoServersComponent } from './list-group-repo-servers.component';

describe('ListGroupRepoServersComponent', () => {
  let component: ListGroupRepoServersComponent;
  let fixture: ComponentFixture<ListGroupRepoServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGroupRepoServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupRepoServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
