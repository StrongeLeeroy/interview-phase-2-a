import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post-preview.component';
import { PostPageComponent } from './containers/post-page.component';
import { HomePageComponent } from './containers/home-page.component';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './+state/blog.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './+state/blog.store';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomePageComponent,
    PostPageComponent
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
