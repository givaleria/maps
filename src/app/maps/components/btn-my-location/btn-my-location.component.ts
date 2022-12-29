import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) { }

  goToMyLocation() {
    if (!this.placesService.isUserLocationReady) throw new Error("No user location");
    if (!this.mapService.isMapReady) throw new Error("No map available");

    this.mapService.flyTo(this.placesService.userLocation!);
  }

}
