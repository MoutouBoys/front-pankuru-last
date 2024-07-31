import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../service/super_admins/super-admin.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-super-admin-list',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent, RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './super-admin-list.component.html',
  styleUrl: './super-admin-list.component.css'
})
export class SuperAdminListComponent implements OnInit {
  ajouterImage: string = "assets/images/Ajouter.png";
  net: string = "assets/images/net.png";
  
  public superadmins: any;
  public showModal: boolean = false;
  public selectedSuperAdmin: any = {};

  constructor(private superadminservice: SuperAdminService, private router: Router) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.superadminservice.getSuperAdmin().subscribe({
      next: (data) => {
        console.log(data);
        this.superadmins = data;
        console.log("admins: " + this.superadmins);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des superadmins: ", err);
      }
    });
  }

  supprimer(id: number): void {
    this.superadminservice.deleteSuperAdmin(id).subscribe({
      next: (response) => {
        console.log("superadmin supprimé avec succès", response);
        this.afficher(); // Mettre à jour la liste des superadmin après suppression
      },
      error: (err) => {
        console.error("Erreur lors de la suppression de superadmin: ", err);
      }
    });
  }

  openModal(superadmin: any): void {
    this.selectedSuperAdmin = { ...superadmin }; // Copier l'objet superadmin
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    this.superadminservice.updateSuperAdmin(this.selectedSuperAdmin.id, this.selectedSuperAdmin).subscribe({
      next: () => {
        this.closeModal();
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour de superadmin: ", err);
      }
    });
  }
}
