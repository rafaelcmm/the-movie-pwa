import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMovies() {
    return this.http
      .get(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`, { headers: this.getHeaders() })
      .map(res => {
        return res.json();
      });
  }

  getMovie(id: string) {
    return this.http
      .get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`, { headers: this.getHeaders() })
      .map(res => {
        return res.json();
      });
  }

  private getHeaders() {
    let headers = new Headers();
    return headers;
  }
}
