import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimadaComponent } from './animada.component';

describe('AnimadaComponent', () => {
  let component: AnimadaComponent;
  let fixture: ComponentFixture<AnimadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
