import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipDetailsComponent } from './internship-details.component';

describe('InternshipDetailsComponent', () => {
  let component: InternshipDetailsComponent;
  let fixture: ComponentFixture<InternshipDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternshipDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
