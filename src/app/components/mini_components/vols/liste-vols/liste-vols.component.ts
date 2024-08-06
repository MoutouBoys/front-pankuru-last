import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { VolService } from '../../../../service/vols/vol.service';
import { PassagersService } from '../../../../service/passagers/passagers.service'; // Importez le service des passagers
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-vols',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.css']
})
export class ListeVolsComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";

  public vols: any;
  public passagers: any; // Déclarez la liste des passagers
  public showModal: boolean = false;
  public showPassagerModal: boolean = false; // Modal pour les passagers
  public selectedVol: any = {};
  public showDeleteModal: boolean = false;
  public volToDelete: any = {};
  public selectedPassager: any = {};
  public passagerToDelete: any = {};

  constructor(private volservice: VolService, private passagerService: PassagersService, private router: Router, private toastr: ToastrService) {}

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

  openDeleteModal(vol: any): void {
    this.volToDelete = vol;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

  confirmDelete(): void {
    this.volservice.deleteVol(this.volToDelete.id).subscribe({
      next: (response) => {
        console.log("Vol supprimé avec succès", response);
        this.toastr.success("Vol supprimé avec succès", "Success");
        this.afficher(); // Mettre à jour la liste des vols après suppression
        this.closeDeleteModal();
      },
      error: (err) => {
        console.error("Erreur lors de la suppression du vol: ", err);
      }
    });
  }

  openModal(vol: any): void {
    this.selectedVol = { ...vol }; // Copier l'objet vol
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.volservice.updateVol(this.selectedVol.id, this.selectedVol).subscribe({
      next: () => {
        this.closeModal();
        this.toastr.success("Vol modifié avec succès", "Success");
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour du vol: ", err);
      }
    });
  }

  openPassagerModal(vol: any): void {
    this.selectedVol = vol; // Définir le vol sélectionné
    this.passagerService.getPassagerByVol(vol.id).subscribe({
      next: (data) => {
        this.passagers = data;
        this.showPassagerModal = true;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des passagers: ", err);
      }
    });
  }

  closePassagerModal(): void {
    this.showPassagerModal = false;
  }
}
