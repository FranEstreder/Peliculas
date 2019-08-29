import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from '../../../environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  moviesArray: any = [];
  imgPath = environment.imgPath;

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

  goDetailsPage(movie) {
    const id = movie.id;
    this.navCtrl.navigateForward('/movie/' + id, id);
  }

}
