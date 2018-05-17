import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsInfoComponent } from './rockets-info.component';

describe('RocketsInfoComponent', () => {
  let component: RocketsInfoComponent;
  let fixture: ComponentFixture<RocketsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
