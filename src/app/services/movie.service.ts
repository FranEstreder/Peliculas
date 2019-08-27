import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'https://api.themoviedb.org/3/';
  apiKey = 'a2644ef202fe255c2e1539db9fe81e6d';

  constructor() { }
}
