import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchCepComponent } from './search-cep/search-cep.component';
import { MessagesComponent } from './messages/messages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
      SearchCepComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
