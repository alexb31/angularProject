import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleDataComponent } from './capsule-data.component';

describe('CapsuleDataComponent', () => {
  let component: CapsuleDataComponent;
  let fixture: ComponentFixture<CapsuleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapsuleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
