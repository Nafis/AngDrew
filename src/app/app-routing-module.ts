import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDessinInformation } from './page-dessin-information/page-dessin-information';

const routes: Routes = [
  {path: '', redirectTo: '/dessin-info', pathMatch: 'full'},
  {path: 'dessin-info', component: PageDessinInformation},
  {path: '**', redirectTo: '/dessin-info' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
