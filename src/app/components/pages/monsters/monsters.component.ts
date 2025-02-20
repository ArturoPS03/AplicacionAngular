import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { AlbumComponent } from "../../album/album.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-monsters',
  standalone: true,
  imports: [HeaderComponent, AlbumComponent, FooterComponent],
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.css'
})
export class MonstersComponent {

}
