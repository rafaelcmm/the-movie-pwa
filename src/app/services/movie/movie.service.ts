import { Injectable } from '@angular/core';
import { Jsonp, Response} from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private jsonp: Jsonp) { }

  getMovies(page: number) {
    return this.jsonp
      .request(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&language=en-US&page=${page}&callback=JSONP_CALLBACK`)
      .map(res => {
        return res.json();
      });
  }

  getMovie(id: string) {
    return this.jsonp
      .request(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}&callback=JSONP_CALLBACK`)
      .map(res => {
        return res.json();
      });
  }

  searchMovie(filter: string) {
    return this.jsonp
      .request(`${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&query="${filter}"&callback=JSONP_CALLBACK`)
      .map(res => {
        return res.json();
      });
  }
}
