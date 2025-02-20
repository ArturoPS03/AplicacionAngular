import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Monster } from '../../interfaces/monters.model';

/**
 * Servicio encargado de la gestión de los monstruos.
 * Utiliza la API para obtener los datos de los monstruos mediante peticiones HTTP.
 * 
 * @example
 * const monsterService = new MonstersService(http);
 * monsterService.getMonsters([1, 2, 3]);
 */
@Injectable({
  providedIn: 'root'
})
export class MonstersService {
  // URL de la API donde se obtienen los datos de los monstruos
  private apiUrl = 'https://mhw-db.com/monsters';

  /**
   * Constructor del servicio que inyecta la dependencia de HttpClient.
   * 
   * @param http - Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene los monstruos mediante sus IDs.
   * Realiza múltiples peticiones a la API para obtener los datos de cada monstruo.
   * 
   * @param monsterIds - Array de IDs de los monstruos a obtener.
   * @returns Observable con un array de monstruos obtenidos de la API.
   * 
   * @example
   * monsterService.getMonsters([1, 2, 3]).subscribe((monsters) => {
   *   console.log(monsters);
   * });
   */
  getMonsters(monsterIds: number[]): Observable<Monster[]> {
    
    // Crea un array de peticiones HTTP para cada ID
    const requests = monsterIds.map(id => this.http.get<Monster>(`${this.apiUrl}/${id}`));
  
    // Combina todas las peticiones en una sola respuesta utilizando forkJoin
    return forkJoin(requests);
  }
}
