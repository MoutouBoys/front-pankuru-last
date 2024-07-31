import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SiegeService } from '../../../../service/sieges/siege.service';

@Component({
  selector: 'app-siege-list',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './siege-list.component.html',
  styleUrl: './siege-list.component.css'
})
export class SiegeListComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";
  
  public sieges: any;
  public showModal: boolean = false;
  public selectedSiege: any = {};

  constructor(private siegeService: SiegeService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.siegeService.getSiege().subscribe({
      next: (data) => {
        console.log(data);
        this.sieges = data;
        console.log("sieges: " + this.sieges);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des sieges: ", err);
      }
    });
  }

  ajouter(): void {
    this.router.navigate(['/formulaireSiege']);
  }

  supprimer(id: number): void {
    this.siegeService.deleteSiege(id).subscribe({
      next: (response) => {
        console.log("siege supprimé avec succès", response);
        this.afficher(); // Mettre à jour la liste des sieges après suppression
      },
      error: (err) => {
        console.error("Erreur lors de la suppression du siege: ", err);
      }
    });
  }

  openModal(siege: any): void {
    this.selectedSiege = { ...siege }; // Copier l'objet avion
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.siegeService.updateSiege(this.selectedSiege.id, this.selectedSiege).subscribe({
      next: () => {
        this.closeModal();
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour du siege: ", err);
      }
    });
  }
}
