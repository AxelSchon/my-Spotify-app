import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { SecNavBarComponent } from './navigation/sec-nav-bar/sec-nav-bar.component';
import { InformationBarComponent } from './navigation/information-bar/information-bar.component';
import { CardComponent } from './navigation/card/card.component';
import { CardHeaderComponent } from './navigation/card-header/card-header.component';
import { SearchLayoutComponent } from './search-layout/search-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { YourLibraryComponent } from './layouts/your-library/your-library.component';
import { LikedSongsComponent } from './layouts/liked-songs/liked-songs.component';
import { CreatePlaylistComponent } from './layouts/create-playlist/create-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecNavBarComponent,
    InformationBarComponent,
    CardComponent,
    CardHeaderComponent,
    SearchLayoutComponent,
    HomeLayoutComponent,
    YourLibraryComponent,
    LikedSongsComponent,
    CreatePlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
