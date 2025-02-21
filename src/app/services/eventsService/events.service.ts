import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../../interfaces/events.model';

/**
 * Servicio encargado de la gestión de los eventos.
 * Utiliza la API para obtener los datos de los eventos mediante peticiones HTTP.
 * 
 * @example
 * const eventsService = new EventsService(http);
 * eventsService.getEvents();
 */
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  // URL de la API donde se obtienen los datos de los eventos
  private apiUrl = 'https://mhw-db.com/events';

  /**
   * Constructor del servicio que inyecta la dependencia de HttpClient.
   * 
   * @param http - Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los eventos disponibles.
   * Realiza una única petición a la API para obtener todos los eventos.
   * 
   * @returns Observable con un array de eventos obtenidos de la API.
   * 
   * @example
   * eventsService.getEvents().subscribe((events) => {
   *   console.log(events);
   * });
   */
  getEvents(): Observable<Event[]> {
    // Realiza una única solicitud GET para obtener todos los eventos
    return this.http.get<Event[]>(this.apiUrl);
  }

  /**
   * Obtiene un evento específico por su ID.
   * 
   * @param eventId - El ID del evento a obtener.
   * @returns Observable con el evento específico.
   * 
   * @example
   * eventsService.getEventById(1).subscribe((event) => {
   *   console.log(event);
   * });
   */
  getEventById(eventId: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${eventId}`);
  }
}