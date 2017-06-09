import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  artistas:any[] = [];

  constructor( private _http:Http ) { }

  getArtistas( termino:string ) {

    // Be careful!
    let headers = new Headers();
    headers.append( 'authorization' , 'Bearer BQD2PCw6cIq-MoGfN08xDAyDaTfJNNQNzDU-bw2PG8AalyQhVZMB836LYwPcF6pTz988nl6KK_Fcb1fg6ydcaw');

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this._http.get( url, {headers} )
            .map( res => {
              this.artistas = res.json().artists.items;
            });
  }

  getArtista( id:string ) {

    // Be careful!
    let headers = new Headers();
    headers.append( 'authorization' , 'Bearer BQD2PCw6cIq-MoGfN08xDAyDaTfJNNQNzDU-bw2PG8AalyQhVZMB836LYwPcF6pTz988nl6KK_Fcb1fg6ydcaw');

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
    headers.append( 'authorization' , 'Bearer BQD2PCw6cIq-MoGfN08xDAyDaTfJNNQNzDU-bw2PG8AalyQhVZMB836LYwPcF6pTz988nl6KK_Fcb1fg6ydcaw');

    let query = `/${id}/top-tracks?country=CO`;
    let url = this.urlArtista + query;

    return this._http.get( url, {headers} )
            .map( res => {
              // console.log(res.json().tracks);
              return res.json().tracks;
            });
  }
}
