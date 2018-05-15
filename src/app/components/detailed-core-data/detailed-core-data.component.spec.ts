import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCoreDataComponent } from './detailed-core-data.component';

describe('DetailedCoreDataComponent', () => {
  let component: DetailedCoreDataComponent;
  let fixture: ComponentFixture<DetailedCoreDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedCoreDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
