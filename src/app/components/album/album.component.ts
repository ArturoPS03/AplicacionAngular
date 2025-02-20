import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonstersService } from '../services/monstersServices/monsters.service';
import { Monster } from '../interfaces/monters.model';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  monsters: Monster[] = []; // Usa el tipo Monster en lugar de any
  monsterIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // IDs de monstruos

  constructor(private monstersService: MonstersService) {}

  ngOnInit(): void {
    this.monstersService.getMonsters(this.monsterIds).subscribe((data) => {
      this.monsters = data; // Asigna la respuesta con el tipo adecuado
    });
  }
}