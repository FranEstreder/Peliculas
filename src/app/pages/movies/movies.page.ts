import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(private navCtrl: NavController, private movieService: MovieService) {
    this.getList();
  }

  ngOnInit() {
  }

  getList() {
    this.movieService.getMovies().subscribe(movies => {
      this.moviesArray = movies['results'];
    });
  }

  getDetails(movie) {
    console.log(movie.id);
    // this.navCtrl.navigateForward('/movie/', movie);
  }

}
