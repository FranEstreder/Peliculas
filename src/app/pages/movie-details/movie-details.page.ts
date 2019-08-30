import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from '../../services/movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movie: any;
  movieDetails: any;
  id: String;

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
      this.movie = movies;
    });
  }

  goBack() {
    this.navCtrl.navigateForward('/movies');
  }

}
