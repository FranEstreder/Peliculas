import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from '../../services/movie.service';
import { NavController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movie: any;
  id: String;
  imgPath = environment.imgPath;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private navCtrl: NavController) {
    this.id = this.route.snapshot.params.id;
    this.getDetails();
  }

  ngOnInit() {
  }

  getDetails() {
    this.movieService.getMovieDetails(this.id).subscribe(movies => {
      console.log('movies 1: ', movies);
      this.movie = movies;
    });
    console.log('movies 2: ', this.movie);
  }

  goBack() {
    this.navCtrl.navigateForward('/movies');
  }

  getBackdrop() {
    return this.imgPath + this.movie.backdrop_path;
  }

  getPoster() {
    return this.imgPath + this.movie.poster_path;
  }

}
