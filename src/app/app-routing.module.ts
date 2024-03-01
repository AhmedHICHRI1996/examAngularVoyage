import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { ListeVoyageComponent } from './liste-voyage/liste-voyage.component';

const routes: Routes = [
  { path: 'addvoyage', component: AddVoyageComponent },
  { path: 'list', component: ListeVoyageComponent },

  { path: '', redirectTo: '/list', pathMatch: 'full' },

  { path: '**', component: ListeVoyageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
