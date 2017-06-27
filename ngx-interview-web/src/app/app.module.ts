import { AssetFieldsService } from './services/assetfields.service';
import { AssetsService } from './services/assets.service';
import { CommonService } from './services/common.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AssetsService,
    AssetFieldsService,
    CommonService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
