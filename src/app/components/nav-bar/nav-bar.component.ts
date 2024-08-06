import { CommonModule, isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthServiceService } from '../../service/auth_service/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, NgFor, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  logo1: string = "assets/images/logoToolbar.png";
  selectedNavItem: string = 'accueil'; // Par défaut, l'accueil est sélectionné
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public role: string = '';

  constructor(private authService: AuthServiceService, private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      const savedNavItem = localStorage.getItem('selectedNavItem');
      if (savedNavItem) {
        this.selectedNavItem = savedNavItem;
      }
    }
    const storedUser = this.isBrowser() ? localStorage.getItem('currentUser') : null;
    this.currentUserSubject = new BehaviorSubject<any>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();

    // Obtenir le rôle de l'utilisateur
    this.role = this.getRole();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  getUsername(): string | null {
    let user = this.currentUserSubject.value;
    return user ? user.Nom + ' ' + user.Prenom : null;
  }

  getRole(): string {
    let user = this.currentUserSubject.value;
console.log(user.role);
    return user ? user.role : null;

  }

  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
    this.router.navigate(['/connexion']);
  }

  selectItem(item: string) {
    this.selectedNavItem = item;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('selectedNavItem', item);
    }
  }
}
