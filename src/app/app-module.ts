import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ZoneDessin } from './zone-dessin/zone-dessin';
import { TopBar } from './top-bar/top-bar';
import { ListDraws } from './list-draws/list-draws';
import { ZWorkspace } from './z-workspace/z-workspace';
import { PageDessinInformation } from './page-dessin-information/page-dessin-information';
import { PageDessin } from './page-dessin/page-dessin';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ZoneDessin,
    TopBar,
    ListDraws,
    ZWorkspace,
    PageDessinInformation,
    PageDessin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
