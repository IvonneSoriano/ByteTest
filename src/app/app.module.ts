import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { IpAddressComponent } from './components/ip-address/ip-address.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';
import { ScanDocsComponent } from './components/scan-docs/scan-docs.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { DynamicDirective } from './components/dynamic/dynamic.directive';

@NgModule({
  declarations: [
    AppComponent,
    IpAddressComponent,
    GeolocationComponent,
    ScanDocsComponent,
    DynamicComponent,
    DynamicDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
