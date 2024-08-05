import { Component, OnInit } from '@angular/core';
import { TitleParametreComponent } from '../mini_components/parametre/title-parametre/title-parametre.component';
import { FormulaireParametreComponent } from '../mini_components/parametre/formulaire-parametre/formulaire-parametre.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';
import { ParametresService } from '../../service/parametre/parametres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametre',
  standalone: true,
  imports: [TitleParametreComponent, FormulaireParametreComponent, NavBarComponent, RechercheComponent],
  templateUrl: './parametre.component.html',
  styleUrl: './parametre.component.css'
})
export class ParametreComponent implements OnInit {

  ajouterImage: string = "assets/images/Ajouter.png";

    public parametres: any;
    public showModal: boolean = false;
    public selectedPassager: any = {};

    constructor(private parametreservice: ParametresService, private router: Router) {}

    ngOnInit(): void {
      this.afficher();
    }

    afficher(): void {
      this.parametreservice.getParametre().subscribe({
        next: (data) => {
          console.log(data);
          this.parametres = data;
          console.log("parametres: " + this.parametres);
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des parametres: ", err);
        }
      });
    }

    // ajouter(): void {
    //   this.router.navigate(['/formulairePassager']);
    // }

    supprimer(id: number): void {
      this.parametreservice.deleteParametre(id).subscribe({
        next: (response) => {
          console.log("personnel supprimé avec succès", response);
          this.afficher(); // Mettre à jour la liste des parametres après suppression
        },
        error: (err) => {
          console.error("Erreur lors de la suppression du passager: ", err);
        }
      });
    }

    openModal(passager: any): void {
      this.selectedPassager = { ...passager }; // Copier l'objet personnel
      this.showModal = true;
    }

    closeModal(): void {
      this.showModal = false;
    }

    onSubmit(): void {
      this.parametreservice.updateParametre(this.selectedPassager.id, this.selectedPassager).subscribe({
        next: () => {
          this.closeModal();
          this.afficher();
        },
        error: (err) => {
          console.error("Erreur lors de la mise à jour du passager: ", err);
        }
      });
    }
    ajouter(): void {
      this.parametreservice.postParametre(this.parametreservice).subscribe({
        next: (response) => {
          console.log("Avion ajouté avec succès", response);
          // this.parametreservice = { nom: '', capaciteTotale: '', matricule: '', maintenance: '' }; // Réinitialiser le formulaire
          this.afficher(); // Mettre à jour la liste des avions après ajout
        },
        error: (err) => {
          console.error("Erreur lors de l'ajout de parametre: ", err);
        }
      });
    }

      ngAfterViewInit(): void {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('flip-in-visible');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        const elementsToAnimate = document.querySelectorAll('.flip-in');
        elementsToAnimate.forEach(element => {
          observer.observe(element);
        });
      }
    }

