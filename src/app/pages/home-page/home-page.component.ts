import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [MovieService]
})
export class HomePageComponent implements OnInit {

  imgPath: string = 'https://image.tmdb.org/t/p/w500/';
  movies: any[] = [];

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.getMovies().subscribe(movies => this.movies = movies.results);
  }

}
