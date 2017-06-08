import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  text:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.text = params['text'];
      this.heroes = this._heroesService.searchHeroes( params['text'] );
      console.log( this.heroes );
    })
  }

}
