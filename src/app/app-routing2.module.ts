import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';

  const routes:Routes = [
    {path:'heros' , component:HeroesComponent}
  ];
 @NgModule({
  
  exports: [ RouterModule ]
})
export class AppRouting2Module { }
