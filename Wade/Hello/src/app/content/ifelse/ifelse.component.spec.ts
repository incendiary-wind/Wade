/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IfelseComponent } from './ifelse.component';

describe('IfelseComponent', () => {
  let component: IfelseComponent;
  let fixture: ComponentFixture<IfelseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfelseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
