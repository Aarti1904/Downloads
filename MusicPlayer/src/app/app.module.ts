import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './components/counter/counter.component';
import { ConvertspacePipe } from './pipes/convertspace.pipe';
import { SearchSongPipe } from './pipes/search-song.pipe';
import { NavComponent } from './components/nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { EditMusicComponent } from './components/edit-music/edit-music.component';
import { DeleteMusicComponent } from './components/delete-music/delete-music.component';
import { UsersComponent } from './components/users/users.component';

const routes:Routes=[
  {path:'',redirectTo:'welcome', pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent},
  {path:'music',component:MainComponent},
  {path:'users',component:UsersComponent},
  {path:'addmusic',component:AddMusicComponent},
  {path:'detailsmusic/:id',component:MusicDetailsComponent},
  {path:'edit/:id',component:EditMusicComponent},
  {path:'delete/:id',component:DeleteMusicComponent},
  {path:'**',component:PageNotFoundComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    AddMusicComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CounterComponent,
    ConvertspacePipe,
    SearchSongPipe,
    NavComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    MusicDetailsComponent,
    EditMusicComponent,
    DeleteMusicComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
