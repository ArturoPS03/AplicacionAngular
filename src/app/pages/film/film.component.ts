import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { JumbotronComponent } from "../../components/jumbotron/jumbotron.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [HeaderComponent, JumbotronComponent, FooterComponent],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {

}
