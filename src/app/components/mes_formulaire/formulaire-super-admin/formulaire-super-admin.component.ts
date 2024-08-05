import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';
import { SuperAdminService } from '../../../service/super_admins/super-admin.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulaire-super-admin',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent, NgFor, NgIf, FormsModule],
  templateUrl: './formulaire-super-admin.component.html',
  styleUrl: './formulaire-super-admin.component.css'
})
export class FormulaireSuperAdminComponent implements OnInit {

  public superadmin: any;
  public nouveauSuperAdmin: any = { nom: '', prenom: '', email: '', password: '', numeroDeTelephone:'', pseudo: '', adresse:''};

  constructor(private superadminservice: SuperAdminService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.afficher();
  }

  afficher(): void {
    this.superadminservice.getSuperAdmin().subscribe({
      next: (data) => {
        console.log(data);
        this.superadmin = data;
        console.log("superadmin: " + this.superadmin);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des superadmin: ", err);
      }
    });
  }

  ajouter(): void {
    this.superadminservice.postSuperAdmin(this.nouveauSuperAdmin).subscribe({
      next: (response) => {
        console.log("SuperAdmin ajouté avec succès", response);
        this.nouveauSuperAdmin = { nom: '', prenom: '', email: '', password: '', numeroDeTelephone:'', pseudo: '', adresse:''}; // Réinitialiser le formulaire
        this.toastr.success("Super admin ajouté avec succès", "Success");
        this.afficher(); // Mettre à jour la liste des superadmin après ajout
        this.router.navigate(["/superadmin"]);
      },
      error: (err) => {
        this.toastr.error("Erreur lors de l'ajout du super admin", "Fermer");
        console.error("Erreur lors de l'ajout du super admin: ", err);
      }
    });
  }
}
