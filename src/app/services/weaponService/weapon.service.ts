import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Weapon } from '../../interfaces/weapon.model';

/**
 * Servicio encargado de la gestión de las armas.
 * Utiliza la API para obtener los datos de las armas mediante peticiones HTTP.
 * 
 * @example
 * const weaponService = new WeaponService(http);
 * weaponService.getWeapons([1, 2, 3]);
 */
@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  // URL de la API donde se obtienen los datos de las armas
  private apiUrl = 'https://mhw-db.com/weapons';

  /**
   * Constructor del servicio que inyecta la dependencia de HttpClient.
   * 
   * @param http - Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene las armas mediante sus IDs.
   * Realiza múltiples peticiones a la API para obtener los datos de cada arma.
   * 
   * @param weaponIds - Array de IDs de las armas a obtener.
   * @returns Observable con un array de armas obtenidas de la API.
   * 
   * @example
   * weaponService.getWeapons([1, 2, 3]).subscribe((weapons) => {
   *   console.log(weapons);
   * });
   */
  getWeapons(weaponIds: number[]): Observable<Weapon[]> {
    // Crea un array de peticiones HTTP para cada ID de arma
    const requests = weaponIds.map(id => this.http.get<Weapon>(`${this.apiUrl}/${id}`));

    // Combina todas las peticiones en una sola respuesta utilizando forkJoin
    return forkJoin(requests);
  }
}
