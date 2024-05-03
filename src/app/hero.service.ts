import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})

export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Vuelo Encontrado.');
    return heroes;
  }
  
  getHero(id: number): Observable<Hero> {
    // Por ahora, supongamos que siempre existe un heroe con el `id` especificado.
    // El manejo de errores se agregara en el siguiente paso del tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`Numero de Vuelo: ${id}`);
    return of(hero);
  }
  
  constructor(private messageService: MessageService) { }
}
