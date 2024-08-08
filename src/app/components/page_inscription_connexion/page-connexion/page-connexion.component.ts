import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../service/auth_service/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';

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

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private toastr: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isConnected = !!localStorage.getItem('currentUser');
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem("currentUser", JSON.stringify(response));
        localStorage.setItem("role", response.role[0]); // Stocker le premier rôle
      }
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

  message = '';

  logo1: string = "assets/images/logoToolbar.png";
  person: string = "assets/images/person.png";
  eyes: string = "assets/images/eye.png";
}
