import { Component } from '@angular/core';
import { TitleAvionComponent } from '../mini_components/avions/title-avion/title-avion.component';
import { PassagersConteneurComponent } from '../mini_components/avions/passagers-conteneur/passagers-conteneur.component';
import { ListAvionComponent } from '../mini_components/avions/list-avion/list-avion.component';
import { AppareilConteneurComponent } from '../mini_components/avions/appareil-conteneur/appareil-conteneur.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-avion',
  standalone: true,
  imports: [TitleAvionComponent, PassagersConteneurComponent, ListAvionComponent, AppareilConteneurComponent, RechercheComponent  , NavBarComponent],
  templateUrl: './avion.component.html',
  styleUrl: './avion.component.css'
})
export class AvionComponent {

}
