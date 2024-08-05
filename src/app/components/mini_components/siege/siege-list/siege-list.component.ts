import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SiegeService } from '../../../../service/sieges/siege.service';
import { ToastrService } from 'ngx-toastr';

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
  public showDeleteModal: boolean = false;
  public siegeToDelete: any = {};

  constructor(private siegeService: SiegeService, private router: Router, private toastr: ToastrService) {}

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

  openDeleteModal(aeroport: any): void {
    this.siegeToDelete = aeroport;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

  confirmDelete(): void {
    this.siegeService.deleteSiege(this.siegeToDelete.id).subscribe({
      next: (response) => {
        console.log("aéroport supprimé avec succès", response);
        this.toastr.error("Siege supprimer avec succès", "Fermer");
        this.afficher(); // Mettre à jour la liste des aéroports après suppression
        this.closeDeleteModal();
      },
      error: (err) => {
        console.error("Erreur lors de la suppression de l'aéroports: ", err);
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
        this.toastr.success("Siege modifier avec succès", "Success");
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour du siege: ", err);
      }
    });
  }
}
