import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RowersComponent } from './rowers/rowers.component';
import { RowerDetailComponent } from './rower-detail/rower-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RowersComponent,
    RowerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
