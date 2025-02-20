import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components//footer/footer.component";

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.css'
})
export class MissionsComponent {

}
