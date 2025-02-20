/**
 * Pruebas unitarias para el componente `HeaderComponent`.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  /**
   * Instancia del componente `HeaderComponent`.
   */
  let component: HeaderComponent;
  
  /**
   * Instancia de `ComponentFixture` para gestionar la prueba del componente.
   */
  let fixture: ComponentFixture<HeaderComponent>;

  /**
   * Configuración inicial antes de ejecutar cada prueba.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Verifica que el componente se cree correctamente.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});