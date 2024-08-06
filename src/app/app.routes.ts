import { Routes } from '@angular/router';
import { AeroportComponent } from './components/aeroport/aeroport.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AvionComponent } from './components/avion/avion.component';
import { FaqComponent } from './components/faq/faq.component';
import { ParametreComponent } from './components/parametre/parametre.component';
import { PassagerComponent } from './components/passager/passager.component';
import { PersonnelsComponent } from './components/personnels/personnels.component';
import { SiegeComponent } from './components/siege/siege.component';
import { VolComponent } from './components/vol/vol.component';
import { CompagnieComponent } from './components/compagnie/compagnie.component';
import { PageConnexionComponent } from './components/page_inscription_connexion/page-connexion/page-connexion.component';
import { FormulaireAdminComponent } from './components/mes_formulaire/formulaire-admin/formulaire-admin.component';
import { FormulaireVolsComponent } from './components/mes_formulaire/formulaire-vols/formulaire-vols.component';
import { FormulairePassagerComponent } from './components/mes_formulaire/formulaire-passager/formulaire-passager.component';
import { FormulairePersonnelsComponent } from './components/mes_formulaire/formulaire-personnels/formulaire-personnels.component';
import { FormulaireSuperAdminComponent } from './components/mes_formulaire/formulaire-super-admin/formulaire-super-admin.component';
import { FormulairePaysVilleComponent } from './components/mes_formulaire/formulaire-pays-ville/formulaire-pays-ville.component';
import { FormulaireAeroportComponent } from './components/mes_formulaire/formulaire-aeroport/formulaire-aeroport.component';
import { FormulaireReponsesFaqComponent } from './components/mes_formulaire/formulaire-reponses-faq/formulaire-reponses-faq.component';
import { FormulaireSiegeComponent } from './components/mes_formulaire/formulaire-siege/formulaire-siege.component';
import { FormulaireAvionComponent } from './components/mes_formulaire/formulaire-avion/formulaire-avion.component';
import { AjoutCompagnieComponent } from './components/mes_formulaire/ajout-compagnie/ajout-compagnie.component';
import { ListFagComponent } from './components/list-fag/list-fag.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { SuperAdminListComponent } from './components/super-admin-list/super-admin-list.component';
import { AuthGuardService } from './service/auth-guard/auth-guard.service';

export const routes: Routes = [
    {path: "", redirectTo: "/connexion", pathMatch:"full"},
    {path:"accueil",title:"accueil",component:AccueilComponent, canActivate:[AuthGuardService]},
    {path:"avion",title:"avion",component:AvionComponent, canActivate:[AuthGuardService]},
    {path:"aeroport",title:"aeroport",component:AeroportComponent, canActivate:[AuthGuardService]},
    {path:"faq",title:"faq",component:FaqComponent, canActivate:[AuthGuardService]},
    {path:"parametre",title:"parametre",component:ParametreComponent, canActivate:[AuthGuardService]},
    {path:"passager",title:"passager",component:PassagerComponent, canActivate:[AuthGuardService]},
    {path:"personnel",title:"personnels",component:PersonnelsComponent, canActivate:[AuthGuardService]},
    {path:"siege",title:"siege",component:SiegeComponent, canActivate:[AuthGuardService]},
    {path:"vol",title:"vol",component:VolComponent, canActivate:[AuthGuardService]},
    {path:"admin",title:"admin",component:AdminListComponent, canActivate:[AuthGuardService]},
    {path:"superadmin",title:"admin",component:SuperAdminListComponent, canActivate:[AuthGuardService]},
    {path:"compagnie",title:"compagnie",component:CompagnieComponent, canActivate:[AuthGuardService]},
    {path:"connexion",title:"connexion",component:PageConnexionComponent},
    {path:"formulaireCompagnie",title:"ajoutCompagnie",component:AjoutCompagnieComponent, canActivate:[AuthGuardService]},
    {path:"formulaireAdmin",title:"formulaireAdmin",component:FormulaireAdminComponent, canActivate:[AuthGuardService]},
    {path:"formulaireVols",title:"formulaireVols",component:FormulaireVolsComponent, canActivate:[AuthGuardService]},
    {path:"formulairePassager",title:"formulairePassager",component:FormulairePassagerComponent, canActivate:[AuthGuardService]},
    {path:"formulairePersonnels",title:"formulairePersonnels",component:FormulairePersonnelsComponent, canActivate:[AuthGuardService]},
    {path:"formulaireDuperAdmin",title:"formulaireDuperAdmin",component:FormulaireSuperAdminComponent, canActivate:[AuthGuardService]},
    {path:"formulairePaysVille",title:"FormulairePaysVille",component:FormulairePaysVilleComponent, canActivate:[AuthGuardService]},
    {path:"formulaireAeroport",title:"formulaireAeroport",component:FormulaireAeroportComponent, canActivate:[AuthGuardService]},
    {path:"formulaireReponsesFaq",title:"formulaireReponsesFaq",component:FormulaireReponsesFaqComponent, canActivate:[AuthGuardService]},
    {path:"formulaireSiege",title:"formulaireSege",component:FormulaireSiegeComponent, canActivate:[AuthGuardService]},
    {path:"formulaireAvion",title:"formulaireAvion",component:FormulaireAvionComponent, canActivate:[AuthGuardService]},
    { path:'formulaireAvion',title:"formulaireAvion", component: FormulaireAvionComponent, canActivate:[AuthGuardService]},
    { path:'formulaireAvion',title:"formulaireAvion", component: FormulaireAvionComponent, canActivate:[AuthGuardService]},
    { path:'fistFagComponent',title:"formulaireAvion", component: ListFagComponent, canActivate:[AuthGuardService]}
];
