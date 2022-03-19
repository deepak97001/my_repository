import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DFitZoneComponent } from './d-fit-zone.component';

describe('DFitZoneComponent', () => {
  let component: DFitZoneComponent;
  let fixture: ComponentFixture<DFitZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DFitZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DFitZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
