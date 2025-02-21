import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../services/eventsService/events.service';
import { Event } from '../../interfaces/events.model';

/**
 * Componente para mostrar un álbum de eventos.
 * Se encarga de obtener los datos de los eventos y mostrarlos en la vista.
 */
@Component({
  selector: 'app-album2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album2.component.html',
  styleUrls: ['./album2.component.css']
})
export class Album2Component implements OnInit {
  // Array que almacena los eventos obtenidos desde la API
  events: Event[] = [];
  
  // Página actual de los eventos
  currentPage: number = 1;

  // Número de eventos por página
  eventsPerPage: number = 12;

  // Total de eventos disponibles (obtenido de la API)
  totalEvents: number = 0;

  /**
   * Constructor del componente donde se inyecta el servicio EventsService.
   * 
   * @param eventsService - Servicio encargado de obtener los eventos desde la API.
   */
  constructor(private eventsService: EventsService) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene los eventos basándose en la página actual y los asigna a la propiedad 'events'.
   * 
   * @returns void
   */
  ngOnInit(): void {
    this.loadEvents();
  }

  /**
   * Carga los eventos de la página actual.
   * 
   * @returns void
   */
  loadEvents(): void {
    this.eventsService.getEvents().subscribe((data) => {
      this.totalEvents = data.length; // Total de eventos obtenidos
      const startIndex = (this.currentPage - 1) * this.eventsPerPage;
      const endIndex = startIndex + this.eventsPerPage;

      // Limita los eventos mostrados según la página actual
      this.events = data.slice(startIndex, endIndex);
    });
  }

  /**
   * Avanza a la siguiente página cargando los eventos correspondientes.
   * 
   * @returns void
   */
  goToNext(): void {
    if ((this.currentPage * this.eventsPerPage) < this.totalEvents) {
      this.currentPage++;
      this.loadEvents(); // Vuelve a cargar los eventos de la siguiente página
    }
  }

  /**
   * Vuelve a la página anterior, si es posible.
   * 
   * @returns void
   */
  goToPrevious(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadEvents(); // Vuelve a cargar los eventos de la página anterior
    }
  }
}