/**
 * Importación de módulos necesarios para las pruebas unitarias en Angular.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';

/**
 * Pruebas unitarias para el componente `CarouselComponent`.
 */
describe('CarouselComponent', () => {
  /**
   * Instancia del componente `CarouselComponent`.
   */
  let component: CarouselComponent;
  
  /**
   * Instancia de `ComponentFixture` para gestionar la prueba del componente.
   */
  let fixture: ComponentFixture<CarouselComponent>;

  /**
   * Configuración inicial antes de ejecutar cada prueba.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
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