import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadDataComponent } from './launchpad-data.component';

describe('LaunchpadDataComponent', () => {
  let component: LaunchpadDataComponent;
  let fixture: ComponentFixture<LaunchpadDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchpadDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
