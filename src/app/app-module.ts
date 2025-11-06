import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ZoneDessin } from './zone-dessin/zone-dessin';
import { TopBar } from './top-bar/top-bar';
import { ListDraws } from './list-draws/list-draws';
import { ZWorkspace } from './z-workspace/z-workspace';

@NgModule({
  declarations: [
    App,
    ZoneDessin,
    TopBar,
    ListDraws,
    ZWorkspace
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
