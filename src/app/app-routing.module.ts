import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';
import { IpAddressComponent } from './components/ip-address/ip-address.component';
import { ScanDocsComponent } from './components/scan-docs/scan-docs.component';

const routes: Routes = [
  {path: "ip", component: IpAddressComponent},
  {path: "geolocation", component: GeolocationComponent},
  {path: "scan", component: ScanDocsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
