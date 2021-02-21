import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { cardHighlighterDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    //cardHighlighterDirective for stying Cards on hovering
    cardHighlighterDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //Imported MatSliderModule for using Slider for Income & expense Calcualtion
    MatSliderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
