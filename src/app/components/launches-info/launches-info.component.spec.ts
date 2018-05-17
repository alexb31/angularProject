import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesInfoComponent } from './launches-info.component';

describe('LaunchesInfoComponent', () => {
  let component: LaunchesInfoComponent;
  let fixture: ComponentFixture<LaunchesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
