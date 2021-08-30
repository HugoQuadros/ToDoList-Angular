import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaInputComponent } from './caixa-input.component';

describe('CaixaInputComponent', () => {
  let component: CaixaInputComponent;
  let fixture: ComponentFixture<CaixaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
