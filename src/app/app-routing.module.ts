import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFactsComponent } from './d-fit-zone/page-facts/page-facts.component';

const routes: Routes = [
  { path: 'page-facts', component: PageFactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

 
}
