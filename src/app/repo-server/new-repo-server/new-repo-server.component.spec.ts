import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRepoServerComponent } from './new-repo-server.component';

describe('NewRepoServerComponent', () => {
  let component: NewRepoServerComponent;
  let fixture: ComponentFixture<NewRepoServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRepoServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRepoServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
