import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BlogEffects } from './+state/blog.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './containers/home-page.component';


import { reducer } from './+state/blog.store';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    StoreModule.forRoot({ blog: reducer }),
    EffectsModule.forRoot([BlogEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
