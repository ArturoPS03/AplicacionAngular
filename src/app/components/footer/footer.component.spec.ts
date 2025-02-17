/**
 * Importación de módulos necesarios para las pruebas unitarias en Angular.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

/**
 * Pruebas unitarias para el componente `FooterComponent`.
 */
describe('FooterComponent', () => {
  /**
   * Instancia del componente `FooterComponent`.
   */
  let component: FooterComponent;
  
  /**
   * Instancia de `ComponentFixture` para gestionar la prueba del componente.
   */
  let fixture: ComponentFixture<FooterComponent>;

  /**
   * Configuración inicial antes de ejecutar cada prueba.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
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