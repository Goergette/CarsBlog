import { Injectable } from '@angular/core';
import {PIECES} from './pieces';
import {Piece } from './models/piece'

@Injectable({
  providedIn: 'root'
})
export class PiecesService {
  private pieces = PIECES;

  constructor() { }

  getPieces():Piece[]{
    return this.pieces;
  }
}
