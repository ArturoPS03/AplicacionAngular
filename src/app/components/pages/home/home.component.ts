import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CarouselComponent } from "../../carousel/carousel.component";
import { AlbumComponent } from "../../album/album.component";
import { HeroComponent } from "../../hero/hero.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, AlbumComponent, HeroComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
