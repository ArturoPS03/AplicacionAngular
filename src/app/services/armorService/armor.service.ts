import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Armor } from '../../interfaces/armor.model';

/**
 * Servicio encargado de la gestión de las armaduras.
 * Utiliza la API para obtener los datos de las armaduras mediante peticiones HTTP.
 * 
 * @example
 * const armorService = new ArmorService(http);
 * armorService.getArmors([1, 2, 3]);
 */
@Injectable({
  providedIn: 'root'
})
export class ArmorService {
  // URL de la API donde se obtienen los datos de las armaduras
  private apiUrl = 'https://mhw-db.com/armor';

  /**
   * Constructor del servicio que inyecta la dependencia de HttpClient.
   * 
   * @param http - Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene las armaduras mediante sus IDs.
   * Realiza múltiples peticiones a la API para obtener los datos de cada armadura.
   * 
   * @param armorIds - Array de IDs de las armaduras a obtener.
   * @returns Observable con un array de armaduras obtenidas de la API.
   * 
   * @example
   * armorService.getArmors([1, 2, 3]).subscribe((armors) => {
   *   console.log(armors);
   * });
   */
  getArmors(armorIds: number[]): Observable<Armor[]> {
    // Crea un array de peticiones HTTP para cada ID de armadura
    const requests = armorIds.map(id => this.http.get<Armor>(`${this.apiUrl}/${id}`));

    // Combina todas las peticiones en una sola respuesta utilizando forkJoin
    return forkJoin(requests);
  }
}