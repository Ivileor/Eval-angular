import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {EditMenuComponent} from "./edit-menu/edit-menu.component";

const routes: Routes = [
  { path: '', component: MainMenuComponent},
  { path: 'edit/:id', component: EditMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
