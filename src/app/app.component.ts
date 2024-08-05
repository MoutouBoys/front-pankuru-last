import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConteneurBodyRechercheComponent } from './components/conteneur-body-recherche/conteneur-body-recherche.component';
import { PageConnexionComponent } from './components/page_inscription_connexion/page-connexion/page-connexion.component';
import { InactivityService } from './service/Inactivity/inactivity.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,ConteneurBodyRechercheComponent, PageConnexionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

constructor(private inactivity: InactivityService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'reservation_billet';
}
