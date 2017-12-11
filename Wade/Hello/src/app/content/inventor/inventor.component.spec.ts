/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InventorComponent } from './inventor.component';

describe('InventorComponent', () => {
  let component: InventorComponent;
  let fixture: ComponentFixture<InventorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
