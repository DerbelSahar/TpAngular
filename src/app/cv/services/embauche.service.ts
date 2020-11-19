import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  embauchees: Personne[];
  constructor() {
    this.embauchees=[];
   }

  getEmbauchees(): Personne[] {
    return this.embauchees;
  }
  addEmbauchee(personne: Personne ) {
    if (!this.embauchees.includes(personne) ){
      this.embauchees.push(personne);
    }
    }
}
