import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../service/auth_service/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-connexion',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule, NgFor, NgIf],
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.css'],
})
export class PageConnexionComponent implements OnInit {
  username: string = '';
  password: string = '';
  isConnected: boolean = false;

  ngOnInit(): void {
    this.isConnected = !!localStorage.getItem('currentUser');
  }

  message = '';

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      localStorage.setItem("currentUser", JSON.stringify(response));
      localStorage.setItem("role", response.role[0]); // Stocker le premier rôle
      this.router.navigate(['/accueil']);
      this.toastr.success("Connexion réussie avec succès", "Success");
      this.username = '';
      this.password = '';
    }, error => {
      this.toastr.error("Nom d'utilisateur ou mot de passe incorrect");
      this.message = 'Invalid username or password';
      this.username = '';
      this.password = '';
    });
  }

  logo1: string = "assets/images/logoToolbar.png";
  person: string = "assets/images/person.png";
  eyes: string = "assets/images/eye.png";
}
