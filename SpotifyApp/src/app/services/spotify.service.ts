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
    headers.append( 'authorization' , 'Bearer BQDNwtlxv5160GxTxPWUI1qQakP9zyKY-fbw1nnMbXWo8h8TAFBRvo_T908GB6-X8Y6Aole-qi1DNyhqDLPjBA');

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this._http.get( url, {headers} ).map( res => {
              // console.log(res.json());
              this.artistas = res.json().artists.items;
              console.log(this.artistas);
              // return this.artistas;
            });
  }
}
