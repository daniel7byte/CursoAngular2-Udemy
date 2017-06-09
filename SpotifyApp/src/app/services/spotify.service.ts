import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor( private _http:Http ) { }

  getArtistas( termino:string ) {

    // Be careful!
    let headers = new Headers();
    headers.append( 'authorization' , 'Bearer BQBblUcW_pqr6bwVAx5Eyb3SquuhoPkYBNEkzzswT9bu2dbxgKwgn7CLyVSqBbhYUpGeea-C_FyK924oPjBqUQ');

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this._http.get( url, {headers} )
            .map( res => {
              // console.log(res.json());
              this.artistas = res.json().artists.items;
              console.log(this.artistas);
              // return this.artistas;
            });
  }

  getArtista( id:string ) {

    // Be careful!
    let headers = new Headers();
    headers.append( 'authorization' , 'Bearer BQBblUcW_pqr6bwVAx5Eyb3SquuhoPkYBNEkzzswT9bu2dbxgKwgn7CLyVSqBbhYUpGeea-C_FyK924oPjBqUQ');

    let query = `/${id}`;
    let url = this.urlArtista + query;

    return this._http.get( url, {headers} )
            .map( res => {
              // console.log(res.json());
              return res.json();
            });
  }

  getTop( id:string ) {

    // Be careful!
    let headers = new Headers();
    headers.append( 'authorization' , 'Bearer BQBblUcW_pqr6bwVAx5Eyb3SquuhoPkYBNEkzzswT9bu2dbxgKwgn7CLyVSqBbhYUpGeea-C_FyK924oPjBqUQ');

    let query = `/${id}/top-tracks?country=CO`;
    let url = this.urlArtista + query;

    return this._http.get( url, {headers} )
            .map( res => {
              console.log(res.json());
              return res.json();
            });
  }
}
