import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() {
    console.log("URL: " + environment.url + "\nApiKey: " + environment.apiKey);
    return this.http.get(environment.url + 'discover/movie?sort_by=popularity.desc&' + environment.apiKey);
  }
}
