import { AfterViewInit, Component } from '@angular/core';
import { SalaireComponent } from '../mini_components/compagnies/salaire/salaire.component';
import { TitleCompagnieComponent } from '../mini_components/compagnies/title-compagnie/title-compagnie.component';
import { GenreCompagnieComponent } from '../mini_components/compagnies/genre-compagnie/genre-compagnie.component';
import { ConteneurRightComponent } from '../mini_components/compagnies/conteneur-right/conteneur-right.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-compagnie',
  standalone: true,
  imports: [SalaireComponent, TitleCompagnieComponent, GenreCompagnieComponent, ConteneurRightComponent,NavBarComponent, RechercheComponent],
  templateUrl: './compagnie.component.html',
  styleUrl: './compagnie.component.css'
})
export class CompagnieComponent  implements AfterViewInit {
  ajouter: string= "assets/images/ajouter.png";

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
