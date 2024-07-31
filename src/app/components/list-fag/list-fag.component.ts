import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';
import { FaqService } from '../../service/faqs/faq.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-list-fag',
  standalone: true,
  imports: [NgOptimizedImage,NavBarComponent, RechercheComponent, NgFor, NgIf, FormsModule
    ,RouterLink, FaqComponent],
  templateUrl: './list-fag.component.html',
  styleUrl: './list-fag.component.css'
})
export class ListFagComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";
  net: string = "assets/images/net.png";

  
  public faqs: any;
  public showModal: boolean = false;
  public selectedFaq: any = {};

  constructor(private Faqservice: FaqService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.Faqservice.getFaq().subscribe({
      next: (data) => {
        console.log(data);
        this.faqs = data;
        console.log("Faqs: " + this.faqs);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des Faqs: ", err);
      }
    });
  }

  ajouter(): void {
    this.router.navigate(['/formulairefaq']);
  }

  supprimer(id: number): void {
    this.Faqservice.deleteFag(id).subscribe({
      next: (response) => {
        console.log("faq supprimé avec succès", response);
        this.afficher(); // Mettre à jour la liste des Faqs après suppression
      },
      error: (err) => {
        console.error("Erreur lors de la suppression de l'faq: ", err);
      }
    });
  }

  openModal(faq: any): void {
    this.selectedFaq = { ...faq }; // Copier l'objet faq
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.Faqservice.upFaq(this.selectedFaq.id, this.selectedFaq).subscribe({
      next: () => {
        this.closeModal();
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour de l'faq: ", err);
      }
    });
  }
}
