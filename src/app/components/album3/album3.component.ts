import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponService } from '../../services/weaponService/weapon.service';
import { ArmorService } from '../../services/armorService/armor.service';
import { Weapon } from '../../interfaces/weapon.model';
import { Armor } from '../../interfaces/armor.model';

/**
 * Componente para mostrar un álbum de armas y armaduras.
 * Permite alternar entre armas y armaduras mediante dos botones.
 * 
 * @example
 * const albumComponent = new Album3Component(weaponService, armorService);
 * albumComponent.ngOnInit(); // Obtiene las armas por defecto al inicializar el componente
 */
@Component({
  selector: 'app-album3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album3.component.html',
  styleUrls: ['./album3.component.css']
})
export class Album3Component implements OnInit {
  // Array que almacena las armas obtenidas desde la API
  weapons: Weapon[] = [];

  // Array que almacena las armaduras obtenidas desde la API
  armors: Armor[] = [];

  // Array de IDs de las armas que se van a mostrar
  weaponIds: number[] = [];

  // Array de IDs de las armaduras que se van a mostrar
  armorIds: number[] = [];

  // Página actual de las armas
  currentWeaponPage: number = 1;

  // Página actual de las armaduras
  currentArmorPage: number = 1;

  // Número de elementos por página
  itemsPerPage: number = 12;

  // Bandera que indica si se están mostrando armas o armaduras
  showWeapons: boolean = true;

  /**
   * Constructor del componente donde se inyectan los servicios WeaponService y ArmorService.
   * 
   * @param weaponService - Servicio encargado de obtener las armas desde la API.
   * @param armorService - Servicio encargado de obtener las armaduras desde la API.
   */
  constructor(
    private weaponService: WeaponService,
    private armorService: ArmorService
  ) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene las armas por defecto y las muestra en la vista.
   * 
   * @returns void
   */
  ngOnInit(): void {
    // Carga las armas de la página actual al inicializar el componente
    this.loadWeapons();
  }

  /**
   * Carga las armas de la página actual.
   * Calcula los IDs de las armas que deben ser mostradas en la página actual.
   * 
   * @returns void
   */
  loadWeapons(): void {
    const startId = (this.currentWeaponPage - 1) * this.itemsPerPage + 1;
    const endId = startId + this.itemsPerPage - 1;
    this.weaponIds = Array.from({ length: this.itemsPerPage }, (_, i) => startId + i);
    
    this.weaponService.getWeapons(this.weaponIds).subscribe((data) => {
      this.weapons = data;
    });
  }

  /**
   * Carga las armaduras de la página actual.
   * Calcula los IDs de las armaduras que deben ser mostradas en la página actual.
   * 
   * @returns void
   */
  loadArmors(): void {
    const startId = (this.currentArmorPage - 1) * this.itemsPerPage + 1;
    const endId = startId + this.itemsPerPage - 1;
    this.armorIds = Array.from({ length: this.itemsPerPage }, (_, i) => startId + i);
    
    this.armorService.getArmors(this.armorIds).subscribe((data) => {
      this.armors = data;
    });
  }

  /**
   * Muestra las armas en la vista.
   * 
   * @returns void
   */
  showWeaponPage(): void {
    this.showWeapons = true;
    this.loadWeapons(); // Carga las armas al mostrar la sección de armas
  }

  /**
   * Muestra las armaduras en la vista.
   * 
   * @returns void
   */
  showArmorPage(): void {
    this.showWeapons = false;
    this.loadArmors(); // Carga las armaduras al mostrar la sección de armaduras
  }

  /**
   * Avanza a la siguiente página de armas.
   * 
   * @returns void
   */
  goToNextWeaponPage(): void {
    this.currentWeaponPage++;
    this.loadWeapons();
  }

  /**
   * Avanza a la siguiente página de armaduras.
   * 
   * @returns void
   */
  goToNextArmorPage(): void {
    this.currentArmorPage++;
    this.loadArmors();
  }

  /**
   * Vuelve a la página anterior de armas, si es posible.
   * 
   * @returns void
   */
  goToPreviousWeaponPage(): void {
    if (this.currentWeaponPage > 1) {
      this.currentWeaponPage--;
      this.loadWeapons();
    }
  }

  /**
   * Vuelve a la página anterior de armaduras, si es posible.
   * 
   * @returns void
   */
  goToPreviousArmorPage(): void {
    if (this.currentArmorPage > 1) {
      this.currentArmorPage--;
      this.loadArmors();
    }
  }
  
  /**
   * Método para capitalizar la primera letra de una cadena de texto.
   * 
   * @param value - La cadena de texto a capitalizar.
   * @returns La cadena con la primera letra en mayúscula.
   */
  capitalizeFirstLetter(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
}
