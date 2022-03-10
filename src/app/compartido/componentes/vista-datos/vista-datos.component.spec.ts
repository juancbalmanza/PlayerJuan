import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDatosComponent } from './vista-datos.component';

describe('VistaDatosComponent', () => {
  let component: VistaDatosComponent;
  let fixture: ComponentFixture<VistaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
