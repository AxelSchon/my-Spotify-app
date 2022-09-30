import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SearchLayoutComponent } from './search-layout/search-layout.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent},
  {path: "search", component: SearchLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
