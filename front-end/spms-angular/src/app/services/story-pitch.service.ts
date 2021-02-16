import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryPitch } from '../models/story-pitch';

import { STORY_PITCH_API_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoryPitchService {

  constructor(private http: HttpClient) { }

  getAllStoryPitches(): Observable<StoryPitch[]> {
    return this.http.get<GetStoryPitchList>(`${STORY_PITCH_API_URL}/api/storyPitches`).pipe(
      map(response => response._embedded.storyPitches)
    );
  }

  // getGenreList():Observable<Genre[]>{
  //   return this.http.get<GetGenreList>(this.genreUrl).pipe(
  //     map(response => response._embedded.genres)
  //   );
  // }

  deletePitch(id){
    return this.http.delete(`${STORY_PITCH_API_URL}/story-pitch/delete/${id}`);
  }

  updatePitch( id, pitch){
    return this.http.put(`${STORY_PITCH_API_URL}/editor/edit/${id}`, pitch);
  }

  // getTestInfo(): Observable<Test[]> {
  //   const searchUrl = `${this.url}`;
  //   return this.http.get<Test[]>(searchUrl);
  // }
  // createAuthenticationHttpHeader(){
  //   let username = 'user';
  //   let password = 'password';
  //   let authenticationHeader = 'Basic ' + window.btoa(username + ':' + password);
  //   return authenticationHeader;
  // }
}

interface GetStoryPitchList {
  _embedded: {
    storyPitches: StoryPitch[];
  }
}
