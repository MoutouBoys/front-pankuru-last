import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { CompagnieService } from '../../../service/compagnies/compagnie.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajout-compagnie',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent, NgFor, NgIf, FormsModule],
  templateUrl: './ajout-compagnie.component.html',
  styleUrl: './ajout-compagnie.component.css'
})
export class AjoutCompagnieComponent  implements OnInit {
  faq: string= "assets/images/faq.svg";
  faq_icon: string= "assets/images/faq 1.png";
  mask: string= "assets/images/Mask.png";
  maison: string= "assets/images/maison.png";
  
  public compagnie: any;
  public nouveauCompagnie: any = { nom: '', codeIATA: '', logo: '', email: '', siteWeb: '', numeroLicence: '', numeroTelephone: '', 
    codeICAO: '', matricule: '' };

  constructor(private compagnieService: CompagnieService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.compagnieService.getCompagnie().subscribe({
      next: (data) => {
        console.log(data);
        this.compagnie = data;
        console.log("compagnie: " + this.compagnie);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des compagnie: ", err);
      }
    });
  }

  ajouter(): void {
    this.compagnieService.postCompagnie(this.nouveauCompagnie).subscribe({
      next: (response) => {
        console.log("Avion ajouté avec succès", response);
        this.nouveauCompagnie = { nom: '', codeIATA: '', longitude: '', latitude: '', altitude: '', capaciteParking: '', nombreDePistes: ''}; // Réinitialiser le formulaire
        this.afficher(); // Mettre à jour la liste des compagnie après ajout
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout de l'avion: ", err);
      }
    });
  }
}
