import { Component } from '@angular/core';
import { TitleAeroportComponent } from '../mini_components/aeroport/title-aeroport/title-aeroport.component';
import { ListAeroportComponent } from '../mini_components/aeroport/list-aeroport/list-aeroport.component';
import { RechercheComponent } from '../recherche/recherche.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-aeroport',
  standalone: true,
  imports: [TitleAeroportComponent, ListAeroportComponent, RechercheComponent, NavBarComponent,ListAeroportComponent],
  templateUrl: './aeroport.component.html',
  styleUrl: './aeroport.component.css'
})
export class AeroportComponent {

}
