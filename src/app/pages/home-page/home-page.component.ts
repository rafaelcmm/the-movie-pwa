import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { HostListener } from '@angular/core';
import * as _ from 'lodash';
import { FavoriteService } from '../../services/favorite/favorite.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [MovieService, FavoriteService]
})
export class HomePageComponent implements OnInit {

  imgPath: string = 'https://image.tmdb.org/t/p/w185';
  movies: any[] = [];
  page = 1;
  favorites: any[] = [];

  connStatus: boolean = navigator.onLine;

  constructor(
    private _movieService: MovieService,
    private _favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    this._movieService.getMovies(this.page).subscribe(movies => this.movies = movies.results);
    this._favoriteService.favorites.subscribe(favs => this.favorites = favs);
  }

  onScroll() {
    this.page++;
    this._movieService.getMovies(this.page).subscribe(movies => {
      this.movies = _.concat(this.movies, movies.results);
    });
  }

}
