import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadLivros } from './cad-livros';

describe('CadLivros', () => {
  let component: CadLivros;
  let fixture: ComponentFixture<CadLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadLivros],
    }).compileComponents();

    fixture = TestBed.createComponent(CadLivros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
