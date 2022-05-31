import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HighlightRendererDirective } from './directives/highlight-renderer.deirective';
import { HostbindingDirective } from './directives/hostbinding.directive';
import { FormsModule } from '@angular/forms';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    HighlightDirective,
    HighlightRendererDirective,
    HostbindingDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
