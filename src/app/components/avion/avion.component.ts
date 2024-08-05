import { AfterViewInit, Component } from '@angular/core';
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
export class AvionComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('zoom-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.zoom-in');
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  }
}
