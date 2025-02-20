import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MonstersComponent } from './pages/monsters/monsters.component';

export const routes: Routes = [
 // Ruta por defecto
 { path: '', redirectTo: 'home', pathMatch: 'full' },

 // Ruta página de inicio
 { path: 'home', component: HomeComponent },

 // Ruta para la página "Monstruos"
 { path: 'monsters', component: MonstersComponent },

];
