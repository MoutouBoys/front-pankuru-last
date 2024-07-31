import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AeroportsService } from '../../../../service/aeroports/aeroports.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-aeroport',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './list-aeroport.component.html',
  styleUrls: ['./list-aeroport.component.css']
})
export class ListAeroportComponent implements OnInit {
    ajouterImage: string = "assets/images/Ajouter.png";
    
    public aeroports: any;
    public showModal: boolean = false;
    public selectedAeroport: any = {};
  
    constructor(private aeroportService: AeroportsService, private router: Router) {}
  
    ngOnInit(): void {
      this.afficher();
    }
  
    afficher(): void {
      this.aeroportService.getAeroport().subscribe({
        next: (data) => {
          console.log(data);
          this.aeroports = data;
          console.log("aéroport: " + this.aeroports);
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des aéroports: ", err);
        }
      });
    }

    supprimer(id: number): void {
      this.aeroportService.deleteAeroport(id).subscribe({
        next: (response) => {
          console.log("aéroport supprimé avec succès", response);
          this.afficher(); // Mettre à jour la liste des aéroports après suppression
        },
        error: (err) => {
          console.error("Erreur lors de la suppression de l'aéroports: ", err);
        }
      });
    }
  
    openModal(aeroport: any): void {
      this.selectedAeroport = { ...aeroport }; // Copier l'objet aéroport
      this.showModal = true;
    }
  
    closeModal(): void {
      this.showModal = false;
    }
  
    onSubmit(): void {
      this.aeroportService.updateAeroport(this.selectedAeroport.id, this.selectedAeroport).subscribe({
        next: () => {
          this.closeModal();
          this.afficher();
        },
        error: (err) => {
          console.error("Erreur lors de la mise à jour de l'aéroport: ", err);
        }
      });
    }
  }
