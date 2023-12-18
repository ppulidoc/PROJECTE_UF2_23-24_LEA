import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutaContentComponent } from './fruta-content.component';

describe('FrutaContentComponent', () => {
  let component: FrutaContentComponent;
  let fixture: ComponentFixture<FrutaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutaContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrutaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
