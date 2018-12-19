import { Component, OnInit } from '@angular/core';
import { NoteService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css']
})
export class AppComponent implements OnInit {
  notes = [];
  note = {};
    constructor(private _noteservice: NoteService) { }
  
    ngOnInit() {
      this.getAllNotes();
    }
  
    getAllNotes(){
      let observable = this._noteservice.getNotes();
      observable.subscribe( data => {
        this.notes = data['notes'];
        console.log(data);
      });
    }

    create(){
      let observable = this._noteservice.createNote(this.note);
      observable.subscribe(data => {
        console.log(data);
        this.getAllNotes();
      });
    }
  }