import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinksMachineComponent } from './_components/drinks-machine/drinks-machine.component';

const routes: Routes = [
  {path: 'drinks', component: DrinksMachineComponent},
  {path: '', redirectTo: 'drinks', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
