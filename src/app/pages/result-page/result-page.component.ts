import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
  providers: [MovieService]
})
export class ResultPageComponent implements OnInit {
  imgPath: string = 'https://image.tmdb.org/t/p/w500/';
  movies: any[] = [];
  filter: string;
  title: string;

  constructor(
    private _movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.filter = this.route.snapshot.paramMap.get('filter');
    this._movieService.searchMovie(this.filter).subscribe(movies => this.movies = movies.results);
    this.title = `Results for "${this.filter}"`;
  }


}
