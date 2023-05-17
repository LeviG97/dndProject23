import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MonsterSearchComponent } from './monster-search/monster-search.component';
import { MonsterService } from './monster.service';

@NgModule({
  declarations: [
    AppComponent,
    MonsterSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MonsterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
