import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { PersonnelsService } from '../../../service/personnels/personnels.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire-personnels',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent, NgFor, NgIf, FormsModule],
  templateUrl: './formulaire-personnels.component.html',
  styleUrl: './formulaire-personnels.component.css'
})
export class FormulairePersonnelsComponent implements OnInit {
  
  public personnels: any;
  public nouveauPersonnel: any = { nom: '', prenom: '', email: '', passwprd: '', numeroDeTelephone:'', poste: ''};

  constructor(private personnelservice: PersonnelsService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.personnelservice.getPersonnel().subscribe({
      next: (data) => {
        console.log(data);
        this.personnels = data;
        console.log("personnels: " + this.personnels);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des personnels: ", err);
      }
    });
  }

  ajouter(): void {
    this.personnelservice.postPersonnel(this.nouveauPersonnel).subscribe({
      next: (response) => {
        console.log("Personnel ajouté avec succès", response);
        this.nouveauPersonnel = { nom: '', prenom: '', email: '', passwprd: '', numeroDeTelephone:'', poste: ''}; // Réinitialiser le formulaire
        this.afficher(); // Mettre à jour la liste des personnels après ajout
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout du Personnel: ", err);
      }
    });
  }
}
