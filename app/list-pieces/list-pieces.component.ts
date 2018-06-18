import { Component, OnInit } from '@angular/core';
import {Piece} from '../models/piece'
import { PiecesService } from '../pieces.service';

@Component({
  selector: 'app-list-pieces',
  templateUrl: './list-pieces.component.html',
  styleUrls: ['./list-pieces.component.css']
})
export class ListPiecesComponent implements OnInit {

  pieces:Piece[];

  constructor(private service:PiecesService) { }

  ngOnInit() {
    this.pieces=this.service.getPieces();
  }

  currentDate(){
    return new Date();
  }

}
