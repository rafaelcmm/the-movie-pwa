import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie/movie.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  providers: [MovieService]
})
export class DetailsPageComponent implements OnInit {
  id: string;
  movie: any;
  imgPath: string = 'https://image.tmdb.org/t/p/w500/';
  
  constructor(
    private route: ActivatedRoute,
    private _movieService: MovieService
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this._movieService.getMovie(this.id).subscribe(movie => {
      this.movie = movie;
      console.log(this.movie);
    });
  }

  ngOnInit() {
  }

}
