import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { VolService } from '../../../../service/vols/vol.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-vols',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './liste-vols.component.html',
  styleUrl: './liste-vols.component.css'
})
export class ListeVolsComponent  implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";
  
  public vols: any;
  public showModal: boolean = false;
  public selectedVol: any = {};

  constructor(private volservice: VolService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.volservice.getVol().subscribe({
      next: (data) => {
        console.log(data);
        this.vols = data;
        console.log("vols: " + this.vols);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des vols: ", err);
      }
    });
  }

  supprimer(id: number): void {
    this.volservice.deleteVol(id).subscribe({
      next: (response) => {
        console.log("vols supprimé avec succès", response);
        this.afficher(); // Mettre à jour la liste des aéroports après suppression
      },
      error: (err) => {
        console.error("Erreur lors de la suppression de vols: ", err);
      }
    });
  }

  openModal(aeroport: any): void {
    this.selectedVol = { ...aeroport }; // Copier l'objet aéroport
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.volservice.updateVol(this.selectedVol.id, this.selectedVol).subscribe({
      next: () => {
        this.closeModal();
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour de la table vol: ", err);
      }
    });
  }
}
