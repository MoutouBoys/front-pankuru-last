import { AfterViewInit, Component } from '@angular/core';
import { SiegeListComponent } from '../mini_components/siege/siege-list/siege-list.component';
import { SiegeConteneurComponent } from '../mini_components/siege/siege-conteneur/siege-conteneur.component';
import { TitleSiegeComponent } from '../mini_components/siege/title-siege/title-siege.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-siege',
  standalone: true,
  imports: [SiegeListComponent,SiegeConteneurComponent,TitleSiegeComponent, NavBarComponent,
    RechercheComponent
  ],
  templateUrl: './siege.component.html',
  styleUrl: './siege.component.css'
})
export class SiegeComponent  implements AfterViewInit {
  ngAfterViewInit(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.slide-in');
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  }
}
