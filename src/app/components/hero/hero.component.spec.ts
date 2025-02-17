/**
 * Importación de módulos necesarios para las pruebas unitarias en Angular.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

/**
 * Pruebas unitarias para el componente `HeroComponent`.
 */
describe('HeroComponent', () => {
  /**
   * Instancia del componente `HeroComponent`.
   */
  let component: HeroComponent;
  
  /**
   * Instancia de `ComponentFixture` para gestionar la prueba del componente.
   */
  let fixture: ComponentFixture<HeroComponent>;

  /**
   * Configuración inicial antes de ejecutar cada prueba.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
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