import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ FormComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

}
