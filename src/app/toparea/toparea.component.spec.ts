import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopareaComponent } from './toparea.component';

describe('TopareaComponent', () => {
  let component: TopareaComponent;
  let fixture: ComponentFixture<TopareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopareaComponent]
    });
    fixture = TestBed.createComponent(TopareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
