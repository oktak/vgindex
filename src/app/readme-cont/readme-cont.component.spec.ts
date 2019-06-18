import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmeContComponent } from './readme-cont.component';

describe('ReadmeContComponent', () => {
  let component: ReadmeContComponent;
  let fixture: ComponentFixture<ReadmeContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmeContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmeContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
