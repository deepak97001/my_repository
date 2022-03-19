import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFactsComponent } from './page-facts.component';

describe('PageFactsComponent', () => {
  let component: PageFactsComponent;
  let fixture: ComponentFixture<PageFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
