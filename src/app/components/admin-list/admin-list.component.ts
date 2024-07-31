import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admins/admin.service';
import { Router, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-list',
  standalone: true,
  imports: [RouterLink, NavBarComponent, RechercheComponent, NgOptimizedImage, NgFor, NgIf, FormsModule],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";
  net: string = "assets/images/net.png";
  
  public admins: any;
  public showModal: boolean = false;
  public selectedAdmin: any = {};

  constructor(private adminservice: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.adminservice.getAdmin().subscribe({
      next: (data) => {
        console.log(data);
        this.admins = data;
        console.log("admins: " + this.admins);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des admin: ", err);
      }
    });
  }

  supprimer(id: number): void {
    this.adminservice.deleteAdmin(id).subscribe({
      next: (response) => {
        console.log("aéroport supprimé avec succès", response);
        this.afficher(); // Mettre à jour la liste des admin après suppression
      },
      error: (err) => {
        console.error("Erreur lors de la suppression de l'admin: ", err);
      }
    });
  }

  openModal(admin: any): void {
    this.selectedAdmin = { ...admin }; // Copier l'objet admin
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.adminservice.updateAdmin(this.selectedAdmin.id, this.selectedAdmin).subscribe({
      next: () => {
        this.closeModal();
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour de l'admin: ", err);
      }
    });
  }
}
