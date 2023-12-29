import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariRegistratComponent } from './usuari-registrat.component';

describe('UsuariRegistratComponent', () => {
  let component: UsuariRegistratComponent;
  let fixture: ComponentFixture<UsuariRegistratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariRegistratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariRegistratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
