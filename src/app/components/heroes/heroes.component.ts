import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //step 1 import class of hero
import {HeroService } from 'src/app/hero.service'; //step 2 import service that will provide service

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService:HeroService) { } //step 3 add the service to the constructor
  heroes: Hero[]; //step 4 create property from hero
  ngOnInit() {
    this.getHeroes(); //step 7 add this line to ngOnInit
  }
  
  selectedHero : Hero;
  onSelect(hero : Hero):void
  {
    this.selectedHero = hero;
  }
  getHeroes():void{
    this.heroService.getHeros()
      .subscribe(heroes=>this.heroes = heroes);
  }
  //get method that synchrounace
  // getHeroes():void{ // step 5 create method to retreve the heroes from the service 
  //   this.heroes = this.heroService.getHeros(); // step 6 getHeros it is method in service
  // }
}
