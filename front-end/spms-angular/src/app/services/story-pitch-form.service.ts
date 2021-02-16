import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { STORY_PITCH_API_URL } from '../app.constants';
import { StoryPitch } from '../models/story-pitch';

@Injectable({
  providedIn: 'root'
})
export class StoryPitchFormService {

  constructor(private http: HttpClient) { }

  retrieveAllPitches(username){
    return this.http.get<StoryPitch[]>(`${STORY_PITCH_API_URL}/author/${username}/pitch`);
    
  }

  deletePitch(id){
    return this.http.delete(`${STORY_PITCH_API_URL}/story-pitch/delete/${id}`);
  }

  retrievePitch(username, id){
    return this.http.get<StoryPitch>(`${STORY_PITCH_API_URL}/author/${username}/pitch/${id}`);
  }

  updatePitch(author_id, book_id, pitch){
    return this.http.put(`${STORY_PITCH_API_URL}/author/${author_id}/edit/${book_id}`, pitch);
  } 

  createPitch(pitch){
    console.log("Creating new pitch...")
    return this.http.post(`${STORY_PITCH_API_URL}/api/storyPitches`, pitch);
  }
}
