import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { HostListener } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [MovieService]
})
export class HomePageComponent implements OnInit {

  imgPath: string = 'https://image.tmdb.org/t/p/w500/';
  movies: any[] = [];
  page = 1;

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.getMovies(this.page).subscribe(movies => this.movies = movies.results);
  }

  onScroll() {
    this.page++;
    this._movieService.getMovies(this.page).subscribe(movies => {
      this.movies = _.concat(this.movies, movies.results);
    });
  }

}
