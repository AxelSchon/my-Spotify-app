import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { SecNavBarComponent } from './navigation/sec-nav-bar/sec-nav-bar.component';
import { InformationBarComponent } from './navigation/information-bar/information-bar.component';
import { CardComponent } from './navigation/card/card.component';
import { CardHeaderComponent } from './navigation/card-header/card-header.component';
import { SearchLayoutComponent } from './layouts/search-layout/search-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { CreatePlaylistLayoutComponent } from './layouts/create-playlist-layout/create-playlist-layout.component';
import { LikedSongsLayoutComponent } from './layouts/liked-songs-layout/liked-songs.component';
import { YourLibraryLayoutComponent } from './layouts/your-library-layout/your-library.component';
import { AlbumLayoutComponent } from './layouts/album-layout/album-layout.component';
import { ArtistPageLayoutComponent } from './layouts/artist-page-layout/artist-page-layout.component';

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
    YourLibraryLayoutComponent,
    LikedSongsLayoutComponent,
    CreatePlaylistLayoutComponent,
    AlbumLayoutComponent,
    ArtistPageLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
