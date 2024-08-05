import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../service/super_admins/super-admin.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';
import { ToastrService } from 'ngx-toastr';

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
  public showDeleteModal: boolean = false;
  public superAdminToDelete: any = {};

  constructor(private superadminservice: SuperAdminService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.superadminservice.getSuperAdmin().subscribe({
      next: (data) => {
        console.log(data);
        this.superadmins = data;
        console.log("superadmins: " + this.superadmins);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des superadmins: ", err);
      }
    });
  }

  openDeleteModal(aeroport: any): void {
    this.superAdminToDelete = aeroport;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

  confirmDelete(): void {
    this.superadminservice.deleteSuperAdmin(this.superAdminToDelete.id).subscribe({
      next: (response) => {
        console.log("aéroport supprimé avec succès", response);
        this.toastr.success("Super Admin modifier avec succès", "Success");
        this.afficher(); // Mettre à jour la liste des aéroports après suppression
        this.closeDeleteModal();
      },
      error: (err) => {
        console.error("Erreur lors de la suppression de l'aéroports: ", err);
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
        this.toastr.success("Super Admin modifier avec succès", "Success");
        this.afficher();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour de superadmin: ", err);
      }
    });
  }
    ngAfterViewInit(): void {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const elementsToAnimate = document.querySelectorAll('.zoom-in');
      elementsToAnimate.forEach(element => {
        observer.observe(element);
      });
    }
  }
