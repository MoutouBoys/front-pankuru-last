import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { PassagersService } from '../../../service/passagers/passagers.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire-passager',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent, NgFor, NgIf, FormsModule],
  templateUrl: './formulaire-passager.component.html',
  styleUrl: './formulaire-passager.component.css'
})
export class FormulairePassagerComponent implements OnInit {
  
  public passagers: any;
  public nouveauPassager: any = { nom: '', prenom: '', NumeroDePasseport: '', passwprd: '', NumeroDeVisa:''};

  constructor(private passagerservice: PassagersService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.passagerservice.getPassager().subscribe({
      next: (data) => {
        console.log(data);
        this.passagers = data;
        console.log("passagers: " + this.passagers);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des passagers: ", err);
      }
    });
  }

  ajouter(): void {
    this.passagerservice.postPassager(this.nouveauPassager).subscribe({
      next: (response) => {
        console.log("Pasager ajouté avec succès", response);
        this.nouveauPassager = { nom: '', prenom: '', NumeroDePasseport: '', passwprd: '', NumeroDeVisa:''}; // Réinitialiser le formulaire
        this.afficher(); // Mettre à jour la liste des passagers après ajout
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout du Passager: ", err);
      }
    });
  }
}
