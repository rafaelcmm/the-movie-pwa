import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie/movie.service';
import {Location} from '@angular/common';
import { FavoriteService } from '../../../services/favorite/favorite.service';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  providers: [MovieService, FavoriteService]
})
export class DetailsPageComponent implements OnInit {
  id: string;
  movie: any = {};
  favorite: boolean;
  imgPath: string = 'https://image.tmdb.org/t/p/w500/';
  
  constructor(
    private route: ActivatedRoute,
    private _movieService: MovieService,
    private _location: Location,
    private _favoriteService: FavoriteService
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this._movieService.getMovie(this.id).subscribe(movie => this.movie = movie);
    this.favorite = false;
  }

  get revenue() {
    return this.movie.revenue.toLocaleString('en-US')
  }

  toggleFavorite() {
    this._favoriteService.push(this.movie);
    this.favorite = !this.favorite;
  }

  ngOnInit() {
    this._favoriteService.favorites.subscribe(favs => console.log(favs));
  }

  back() {
    this._location.back();
  }

}
