import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { CreatePlaylistComponent } from './layouts/create-playlist/create-playlist.component';
import { LikedSongsComponent } from './layouts/liked-songs/liked-songs.component';
import { YourLibraryComponent } from './layouts/your-library/your-library.component';
import { SearchLayoutComponent } from './search-layout/search-layout.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent},
  {path: "search", component: SearchLayoutComponent },
  {path: "your-library", component: YourLibraryComponent},
  { path: 'liked-songs', component: LikedSongsComponent},
  { path: 'create-playlist', component: CreatePlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
