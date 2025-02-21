import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Album2Component } from "../../components/album2/album2.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [HeaderComponent, Album2Component, FooterComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
