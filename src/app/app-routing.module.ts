import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistLayoutComponent } from './layouts/create-playlist-layout/create-playlist-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LikedSongsLayoutComponent } from './layouts/liked-songs-layout/liked-songs.component';
import { YourLibraryLayoutComponent } from './layouts/your-library-layout/your-library.component';
import { SearchLayoutComponent } from './layouts/search-layout/search-layout.component';
import { AlbumLayoutComponent } from './layouts/album-layout/album-layout.component';
import { ArtistPageLayoutComponent } from './layouts/artist-page-layout/artist-page-layout.component';
import { AddProductComponent } from './navigation/add-product/add-product.component';
import { AuthComponent } from './auth/auth/auth.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent},
  { path: "search", component: SearchLayoutComponent },
  { path: "your-library", component: YourLibraryLayoutComponent},
  { path: 'liked-songs', component: LikedSongsLayoutComponent},
  { path: 'create-playlist', component: CreatePlaylistLayoutComponent},
  { path: 'album-layout', component: AlbumLayoutComponent},  
  { path: 'artist-page-layout', component: ArtistPageLayoutComponent},
  { path: 'admin', component: AddProductComponent},
  { path: 'auth', component: AuthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
