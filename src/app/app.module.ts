import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, CanActivate, CanActivateChild } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { DetailGameComponent } from './components/detail-game/detail-game.component';
import { LoginComponent } from './components/login/login.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { Route } from '@angular/compiler/src/core';

const appRoutes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'gamelist', component: GameListComponent},
  {path : 'detailgame', component: DetailGameComponent},
  {path : 'login', component: LoginComponent},
  {path : 'menu', component: MenuComponent},
  {path : 'editgames', component: EditGameComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GameListComponent,
    DetailGameComponent,
    LoginComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
