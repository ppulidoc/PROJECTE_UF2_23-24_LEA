import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateContentComponent } from './chocolate-content.component';

describe('ChocolateContentComponent', () => {
  let component: ChocolateContentComponent;
  let fixture: ComponentFixture<ChocolateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolateContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocolateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
