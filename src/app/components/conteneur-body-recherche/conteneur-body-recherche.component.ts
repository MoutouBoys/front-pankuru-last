import { Component } from '@angular/core';
import { RechercheComponent } from '../recherche/recherche.component';
import { PersonnelsComponent } from '../personnels/personnels.component';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-conteneur-body-recherche',
  standalone: true,
  imports: [RechercheComponent, PersonnelsComponent,RouterOutlet,NavBarComponent],
  templateUrl: './conteneur-body-recherche.component.html',
  styleUrl: './conteneur-body-recherche.component.css'
})
export class ConteneurBodyRechercheComponent {

}
