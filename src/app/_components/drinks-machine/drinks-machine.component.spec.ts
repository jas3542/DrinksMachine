import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksMachineComponent } from './drinks-machine.component';

describe('DrinksMachineComponent', () => {
  let component: DrinksMachineComponent;
  let fixture: ComponentFixture<DrinksMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
