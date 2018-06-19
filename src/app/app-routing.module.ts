import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page/details-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movie/:id', component: DetailsPageComponent },
  { path: 'movie/search/:search', component: ResultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
