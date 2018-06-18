import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPiecesComponent } from './list-pieces/list-pieces.component';
import { PiecesService } from './pieces.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPiecesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PiecesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
