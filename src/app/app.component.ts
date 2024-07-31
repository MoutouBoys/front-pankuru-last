import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConteneurBodyRechercheComponent } from './components/conteneur-body-recherche/conteneur-body-recherche.component';
import { PageConnexionComponent } from './components/page_inscription_connexion/page-connexion/page-connexion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,ConteneurBodyRechercheComponent, PageConnexionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reservation_billet';
}
