import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { EBUSY } from 'constants';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Jordana', universe: 'EY',power:'Princesa da Disney',second_power:'none' },
      { id: 12, name: 'Mariana', universe: 'EY',power:'Ler Mente',second_power:'Voar'  },
      { id: 13, name: 'Victor', universe: 'EY',power:'Super Força',second_power:'none'  },
      { id: 14, name: 'Ana', universe: 'EY',power:'Teletransporte',second_power:'Voar'  },
      { id: 15, name: 'Léo', universe: 'EY',power:'Teletransporte',second_power:'Voar'  },
      { id: 16, name: 'Daniel', universe: 'EY',power:'Super Força',second_power:'none'  },
      { id: 17, name: 'Fernanda', universe: 'EY',power:'Princesa da Disney',second_power:'none'  },
      { id: 18, name: 'Mirella', universe: 'EY',power:'Voar',second_power:'Teletransporte'  },
      { id: 19, name: 'Tabatha', universe: 'EY',power:'Princesa da Amazonas',second_power:'Crossfiteira'  },
      { id: 20, name: 'Julio', universe: 'EY',power:'Imortal',second_power:'Vampiro'  }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
