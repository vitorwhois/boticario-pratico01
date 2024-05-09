import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BestsellersComponent } from './components/pages/bestsellers/bestsellers.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bestsellers', component: BestsellersComponent },
  {path: 'search/:searchTerm', component: BestsellersComponent}, // Conferir o Compenet certo
  {path: 'product/:id', component:ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
