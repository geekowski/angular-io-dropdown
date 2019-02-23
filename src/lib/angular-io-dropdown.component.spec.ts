import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularioDropdownDirective } from './angular-io-dropdown.directive';

describe('AngularIoDropdownComponent', () => {
  let component: AngularioDropdownDirective;
  let fixture: ComponentFixture<AngularioDropdownDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularioDropdownDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularioDropdownDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
