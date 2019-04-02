import { Injectable } from '@angular/core';
import { Hero } from './components/hero';
import {HEROS} from './components/mock-heros';
import {Observable , of} from 'rxjs';
import {MessageService} from 'src/app/message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  // getHeros():Hero[]{  //method example on synchrounace
  //   return HEROS;
  // }
  getHeros():Observable<Hero[]>
  {
    this.messageService.add('HeroService : Fetched heros');
    return of(HEROS);
  }
}
