import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { AvionService } from '../../../service/avions/avion.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire-avion',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent, FormsModule],
  templateUrl: './formulaire-avion.component.html',
  styleUrls: ['./formulaire-avion.component.css']
})
export class FormulaireAvionComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";
  
  public avions: any;
  public nouveauAvion: any = { nom: '', capaciteTotale: '', matricule: '', maintenance: '' };

  constructor(private avionService: AvionService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.avionService.getAvion().subscribe({
      next: (data) => {
        console.log(data);
        this.avions = data;
        console.log("avions: " + this.avions);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des avions: ", err);
      }
    });
  }

  ajouter(): void {
    this.avionService.postAvion(this.nouveauAvion).subscribe({
      next: (response) => {
        console.log("Avion ajouté avec succès", response);
        this.nouveauAvion = { nom: '', capaciteTotale: '', matricule: '', maintenance: '' }; // Réinitialiser le formulaire
        this.afficher(); // Mettre à jour la liste des avions après ajout
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout de l'avion: ", err);
      }
    });
  }
}
