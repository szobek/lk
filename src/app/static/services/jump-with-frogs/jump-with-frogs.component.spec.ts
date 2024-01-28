import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpWithFrogsComponent } from './jump-with-frogs.component';

describe('JumpWithFrogsComponent', () => {
  let component: JumpWithFrogsComponent;
  let fixture: ComponentFixture<JumpWithFrogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JumpWithFrogsComponent]
    });
    fixture = TestBed.createComponent(JumpWithFrogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
