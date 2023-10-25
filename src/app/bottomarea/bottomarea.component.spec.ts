import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomareaComponent } from './bottomarea.component';

describe('BottomareaComponent', () => {
  let component: BottomareaComponent;
  let fixture: ComponentFixture<BottomareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomareaComponent]
    });
    fixture = TestBed.createComponent(BottomareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
