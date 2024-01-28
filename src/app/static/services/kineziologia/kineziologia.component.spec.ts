import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KineziologiaComponent } from './kineziologia.component';

describe('KineziologiaComponent', () => {
  let component: KineziologiaComponent;
  let fixture: ComponentFixture<KineziologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KineziologiaComponent]
    });
    fixture = TestBed.createComponent(KineziologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
