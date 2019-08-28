import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';
  constructor(private movieService: MovieService) {
    // this.getList();
  }

  ngOnInit() {

  }

  getList() {
    this.movieService.getMovies().subscribe(movies => {
      this.moviesArray = movies['results'];
    });
    // console.log("Hola\n" + this.moviesArray);
  }

}
