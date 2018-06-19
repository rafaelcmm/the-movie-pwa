import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
  providers: [MovieService],
  entryComponents: [SearchBarComponent]
})
export class ResultPageComponent implements OnInit {
  imgPath: string = 'https://image.tmdb.org/t/p/w500/';
  movies: any[] = [];
  filter: string;
  title: string;

  constructor(
    private _movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.filter = this.route.snapshot.paramMap.get('filter');
    this._movieService.searchMovie(this.filter).subscribe(movies => this.movies = movies.results);
    this.title = `Results for "${this.filter}"`;
  }

  ngOnInit() {
  }
}
