import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Monster} from '../../interfaces/monters.model';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {
  private apiUrl = 'https://mhw-db.com/monsters';

  constructor(private http: HttpClient) {}

  getMonsters(monsterIds: number[]): Observable<Monster[]> {
    // Crea un array de peticiones HTTP para cada ID
    const requests = monsterIds.map(id => this.http.get<Monster>(`${this.apiUrl}/${id}`));
  
    // Combina todas las peticiones en una sola respuesta
    return forkJoin(requests);
  }
}
