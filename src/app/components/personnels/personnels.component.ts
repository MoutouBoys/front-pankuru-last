import { AfterViewInit, Component } from '@angular/core';
import { AutreSalariesComponent } from '../mini_components/personnels/autre-salaries/autre-salaries.component';
import { CategoriesPersonnelsComponent } from '../mini_components/personnels/categories-personnels/categories-personnels.component';
import { ListPersonnelsComponent } from '../mini_components/personnels/list-personnels/list-personnels.component';
import { SalaireComponent } from '../mini_components/personnels/salaire/salaire.component';
import { TancheAgeComponent } from '../mini_components/personnels/tanche-age/tanche-age.component';
import { TitlePersonnelsComponent } from '../mini_components/personnels/title-personnels/title-personnels.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-personnels',
  standalone: true,
  imports: [AutreSalariesComponent, CategoriesPersonnelsComponent, ListPersonnelsComponent,
    SalaireComponent, TancheAgeComponent, TitlePersonnelsComponent, NavBarComponent, RechercheComponent
  ],
  templateUrl: './personnels.component.html',
  styleUrl: './personnels.component.css'
})
export class PersonnelsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  }
}
