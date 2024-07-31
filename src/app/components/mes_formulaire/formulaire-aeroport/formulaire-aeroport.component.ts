import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { AeroportsService } from '../../../service/aeroports/aeroports.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire-aeroport',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent, NgFor, FormsModule],
  templateUrl: './formulaire-aeroport.component.html',
  styleUrl: './formulaire-aeroport.component.css'
})
export class FormulaireAeroportComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";
  
  public avions: any;
  public nouveauAvion: any = { nom: '', codeIATA: '', longitude: '', latitude: '', altitude: '', capaciteParking: '', nombreDePistes: '' };

  constructor(private avionService: AeroportsService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.avionService.getAeroport().subscribe({
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
    this.avionService.postAeroport(this.nouveauAvion).subscribe({
      next: (response) => {
        console.log("Avion ajouté avec succès", response);
        this.nouveauAvion = { nom: '', codeIATA: '', longitude: '', latitude: '', altitude: '', capaciteParking: '', nombreDePistes: ''}; // Réinitialiser le formulaire
        this.afficher(); // Mettre à jour la liste des avions après ajout
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout de l'avion: ", err);
      }
    });
  }
}
