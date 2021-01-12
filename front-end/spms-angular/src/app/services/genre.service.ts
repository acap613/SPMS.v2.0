import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genreUrl = 'http://localhost:8080/api/genres';

  constructor(private http: HttpClient) { }

  getGenreList():Observable<Genre[]>{
    return this.http.get<GetGenreList>(this.genreUrl).pipe(
      map(response => response._embedded.genres)
    );
  }

  // getGenreList():Observable<Genre[]>{
  //   return this.http.get<GetGenreList[]>(this.genreUrl).pipe(

  //   );
  // }

}

interface GetGenreList {
  _embedded: {
    genres: Genre[];
  }
}