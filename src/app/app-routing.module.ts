import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistLayoutComponent } from './layouts/create-playlist-layout/create-playlist-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LikedSongsLayoutComponent } from './layouts/liked-songs-layout/liked-songs.component';
import { YourLibraryLayoutComponent } from './layouts/your-library-layout/your-library.component';
import { SearchLayoutComponent } from './layouts/search-layout/search-layout.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent},
  {path: "search", component: SearchLayoutComponent },
  {path: "your-library", component: YourLibraryLayoutComponent},
  { path: 'liked-songs', component: LikedSongsLayoutComponent},
  { path: 'create-playlist', component: CreatePlaylistLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
