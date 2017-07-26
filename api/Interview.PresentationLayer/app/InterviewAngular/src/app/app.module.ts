import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AppComponentList } from './app.componentList';
import { CRUDAssetDetailsService } from './CRUDAssetDetails.service';
import { IAssets } from './interfaces';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      AppComponent, AppComponentList
  ],
  imports: [
      BrowserModule,
      HttpModule,
      FormsModule
  ],
  providers: [CRUDAssetDetailsService],
  bootstrap: [AppComponent, AppComponentList]
})
export class AppModule { }
