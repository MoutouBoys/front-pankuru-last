import { Component } from '@angular/core';
import { TitleParametreComponent } from '../mini_components/parametre/title-parametre/title-parametre.component';
import { FormulaireParametreComponent } from '../mini_components/parametre/formulaire-parametre/formulaire-parametre.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-parametre',
  standalone: true,
  imports: [TitleParametreComponent, FormulaireParametreComponent, NavBarComponent, RechercheComponent],
  templateUrl: './parametre.component.html',
  styleUrl: './parametre.component.css'
})
export class ParametreComponent {

}
