import { Component, OnInit , Input} from '@angular/core';
import {HEROS} from '../mock-heros';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero: Hero;
}
