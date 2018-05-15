import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCapsuleDataComponent } from './detailed-capsule-data.component';

describe('DetailedCapsuleDataComponent', () => {
  let component: DetailedCapsuleDataComponent;
  let fixture: ComponentFixture<DetailedCapsuleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedCapsuleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCapsuleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
