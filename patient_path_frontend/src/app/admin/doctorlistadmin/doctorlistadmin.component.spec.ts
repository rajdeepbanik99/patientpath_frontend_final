import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlistadminComponent } from './doctorlistadmin.component';

describe('DoctorlistadminComponent', () => {
  let component: DoctorlistadminComponent;
  let fixture: ComponentFixture<DoctorlistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorlistadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorlistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
