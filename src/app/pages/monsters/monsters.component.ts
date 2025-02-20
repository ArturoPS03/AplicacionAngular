import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AlbumComponent } from "../../components/album/album.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-monsters',
  standalone: true,
  imports: [HeaderComponent, AlbumComponent, FooterComponent],
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.css'
})
export class MonstersComponent {

}
