import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
 
 
  embauchees: Personne[];
  constructor(private serviceEmbauche:EmbaucheService) { }

  ngOnInit(): void {
    this.embauchees=this.serviceEmbauche.getEmbauchees();}
   
  

}
