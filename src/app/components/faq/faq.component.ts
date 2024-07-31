import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';
import { FormsModule } from '@angular/forms';
import { FaqService } from '../../service/faqs/faq.service';
import { Router, RouterLink } from '@angular/router';
import { ListFagComponent } from '../list-fag/list-fag.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent, NgFor, NgIf, FormsModule, RouterLink,
    ListFagComponent
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit{
  faq_icon: string= "assets/images/faq 1.png";
  faq1: string= "assets/images/faq.svg";


  public faq: any;
  public nouveauFaq: any={questionCategorie: "",  reponse:""};
  
  constructor(private faqService: FaqService, router: Router){}
  
    ngOnInit(): void {
      this.afficher();
    }
  
  afficher(): void{
    this.faqService.getFaq().subscribe({
      next: (data)=>{
        console.log(data);
        this.faq = data;
        console.log("Faq:" + this.faq);
      },
      error:(err)=>{
        console.error("Erreur lors de la récupération des faqs: " + err);
      }
    });
  }

  ajouter():void{
    this.faqService.postFaq(this.nouveauFaq).subscribe({
      next:(response)=>{
        console.log( "Faq ajouté avec succès : "+ response);
        this.nouveauFaq= {questionCategorie:"", reponse:""};
        this.afficher(); // Mettre à jour la liste des compagnie après ajout
      },
      error:(err)=>{
        console.log("Erreur lors de l'ajout d'une question(faq): " + err);
      }
    });
  }
}
