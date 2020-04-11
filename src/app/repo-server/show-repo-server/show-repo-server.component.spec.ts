import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRepoServerComponent } from './show-repo-server.component';

describe('ShowRepoServerComponent', () => {
  let component: ShowRepoServerComponent;
  let fixture: ComponentFixture<ShowRepoServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRepoServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRepoServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
