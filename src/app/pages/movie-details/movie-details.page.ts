import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movieId: String;
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.movieId = params["id"];
    });
    console.log(this.movieId);
    this.getDetails();
  }

  ngOnInit() {
  }

  getDetails() {
    this.movieService.getMovieDetails(this.movieId).subscribe(movies => {
      this.movie = movies;
    });
    console.log(this.movie);
  }


}
