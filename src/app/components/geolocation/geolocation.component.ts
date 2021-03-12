import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './geolocation.service'

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {

  constructor(
    private locationService: GeolocationService
  ) { }

  latitude;
  longitude;
  ngOnInit(): void {
    this.getLocation()
  }

  getLocation() {
    this.locationService.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
    });
}

}
