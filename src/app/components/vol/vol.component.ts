import { AfterViewInit, Component } from '@angular/core';
import { TitleVolsComponent } from '../mini_components/vols/title-vols/title-vols.component';
import { ReservationsVolsComponent } from '../mini_components/vols/reservations-vols/reservations-vols.component';
import { ListeVolsComponent } from '../mini_components/vols/liste-vols/liste-vols.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-vol',
  standalone: true,
  imports: [ReservationsVolsComponent, ListeVolsComponent, NavBarComponent, RechercheComponent],
  templateUrl: './vol.component.html',
  styleUrl: './vol.component.css'
})
export class VolComponent implements AfterViewInit {

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
