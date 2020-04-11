import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRepoServersComponent } from './list-repo-servers.component';

describe('ListRepoServersComponent', () => {
  let component: ListRepoServersComponent;
  let fixture: ComponentFixture<ListRepoServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRepoServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRepoServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
