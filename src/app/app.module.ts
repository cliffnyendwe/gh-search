
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponet} from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponet 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchComponet],
  bootstrap: [AppComponent]
})
export class AppModule { }