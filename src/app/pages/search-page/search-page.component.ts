import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { MovieService } from '../../services/movie/movie.service';
import 'rxjs/add/operator/debounceTime';
import * as _ from 'lodash';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [MovieService]
})
export class SearchPageComponent implements OnInit, OnDestroy {

  filter: FormControl;
  movies = [];
  filterSubscription: Subscription;
  movieSubscription: Subscription;

  imgPath: string = 'https://image.tmdb.org/t/p/w500/';
  page = 1;

  constructor(
    private _movieService: MovieService
  ) {
    this.filter = new FormControl();
  }

  ngOnInit() {
    this.filterSubscription = this._filterSubscription();
  }

  ngOnDestroy() {
    if (this.movieSubscription) this.filterSubscription.unsubscribe();
    if (this.movieSubscription) this.movieSubscription.unsubscribe();
  }

  onScroll() {
    this.page++;
    this._movieService.searchMovie(this.filter.value, this.page).subscribe(movies => this.movies = _.concat(this.movies, movies.results));
  }

  _filterSubscription() {
    return this.filter.valueChanges
      .debounceTime(500)
      .subscribe(value => {
        this.movies = [];
        this.page = 1;
        this.movieSubscription = this._movieService.searchMovie(value, this.page).subscribe(movies => this.movies = _.concat(this.movies, movies.results));
      });
  }
}
