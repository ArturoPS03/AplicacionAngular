import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Album3Component } from "../../components/album3/album3.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [HeaderComponent, Album3Component, FooterComponent],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {

}
