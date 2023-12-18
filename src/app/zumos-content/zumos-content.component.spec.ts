import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZumosContentComponent } from './zumos-content.component';

describe('ZumosContentComponent', () => {
  let component: ZumosContentComponent;
  let fixture: ComponentFixture<ZumosContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZumosContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZumosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
