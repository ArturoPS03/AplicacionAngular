import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonstersService } from '../../services/monstersServices/monsters.service';
import { Monster } from '../../interfaces/monters.model';

/**
 * Componente para mostrar un álbum de monstruos.
 * Se encarga de obtener los datos de los monstruos y mostrarlos en la vista.
 * 
 * @example
 * const albumComponent = new AlbumComponent(monstersService);
 * albumComponent.ngOnInit(); // Obtiene los monstruos al inicializar el componente
 */
@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  // Array que almacena los monstruos obtenidos desde la API
  monsters: Monster[] = [];
  
  // Array de IDs de los monstruos que se van a mostrar
  monsterIds: number[] = [];

  // Página actual de los monstruos
  currentPage: number = 1;

  // Número de monstruos por página
  monstersPerPage: number = 12;

  /**
   * Constructor del componente donde se inyecta el servicio MonstersService.
   * 
   * @param monstersService - Servicio encargado de obtener los monstruos desde la API.
   */
  constructor(private monstersService: MonstersService) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene los monstruos basándose en la página actual y los asigna a la propiedad 'monsters'.
   * 
   * @returns void
   */
  ngOnInit(): void {
    // Llama al método para cargar los monstruos de la página actual
    this.loadMonsters();
  }

  /**
   * Carga los monstruos de la página actual.
   * Calcula los IDs de los monstruos que deben ser mostrados en la página actual.
   * 
   * @returns void
   */
  loadMonsters(): void {
    // Calcula el rango de IDs según la página actual
    const startId = (this.currentPage - 1) * this.monstersPerPage + 1;
    const endId = startId + this.monstersPerPage - 1;

    // Genera el array de IDs para la página actual
    this.monsterIds = Array.from({ length: this.monstersPerPage }, (_, i) => startId + i);

    // Llama al servicio para obtener los monstruos con esos IDs
    this.monstersService.getMonsters(this.monsterIds).subscribe((data) => {
      this.monsters = data;
    });
  }

  /**
   * Avanza a la siguiente página cargando los monstruos correspondientes.
   * 
   * @returns void
   */
  goToNext(): void {
    this.currentPage++;
    this.loadMonsters(); // Vuelve a cargar los monstruos de la siguiente página
  }

  /**
   * Vuelve a la página anterior, si es posible.
   * 
   * @returns void
   */
  goToPrevious(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMonsters(); // Vuelve a cargar los monstruos de la página anterior
    }
  }
}