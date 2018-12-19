import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _http: HttpClient) { }

  getNotes(){
    return this._http.get('/notes');
  }
  createNote(note){
    return this._http.post('/notes', note);
  }
  getOne(id){
    return this._http.get(`/notes/${id}`);
  }

  updateOne(id, note){
    return this._http.put(`/notes/${id}`, note);
  }

  deleteOne(id){
    return this._http.delete(`/notes/${id}`);
  }
}