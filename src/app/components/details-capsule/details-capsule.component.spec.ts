import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCapsuleComponent } from './details-capsule.component';

describe('DetailsCapsuleComponent', () => {
  let component: DetailsCapsuleComponent;
  let fixture: ComponentFixture<DetailsCapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCapsuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
