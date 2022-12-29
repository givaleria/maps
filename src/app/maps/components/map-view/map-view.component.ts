import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Map, Popup, Marker } from "mapbox-gl";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!: ElementRef

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) { }

  ngAfterViewInit(): void {
    if (!this.placesService.userLocation) throw new Error("There is no placesService.userLocation");


    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      // style: 'mapbox://styles/mapbox/dark-v11',
      center: this.placesService.userLocation,
      zoom: 14,
      });

    const popUp = new Popup()
      .setHTML(
        `
        <h6>I'm here</h6>
        <span>On this part of the world</span>
        `
      );

    new Marker({color: 'red'})
        .setLngLat(this.placesService.userLocation)
        .setPopup(popUp)
        .addTo(map)

    this.mapService.setMap(map);

  }


}
