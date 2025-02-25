import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MonstersComponent } from './pages/monsters/monsters.component';
import { EventsComponent } from './pages/events/events.component';
import { FilmComponent } from './pages/film/film.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

export const routes: Routes = [
 // Ruta por defecto
 { path: '', redirectTo: 'home', pathMatch: 'full' },

 // Ruta página de inicio
 { path: 'home', component: HomeComponent },

 // Ruta para la página "Monstruos"
 { path: 'monsters', component: MonstersComponent },

  // Ruta para la página "Misiones"
  { path: 'events', component: EventsComponent },

    // Ruta para la página "Película"
    { path: 'film', component: FilmComponent },

    // Ruta para la página "Equipamiento"
    { path: 'equipment', component: EquipmentComponent },

        // Ruta para la página "Crear cuenta"
        { path: 'createAccount', component: CreateAccountComponent },
];
