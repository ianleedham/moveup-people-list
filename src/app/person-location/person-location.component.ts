import { Component, Input, OnInit } from '@angular/core';
import { PersonLocation } from '../models/person';

@Component({
  selector: 'app-person-location',
  templateUrl: './person-location.component.html',
  styleUrls: ['./person-location.component.scss']
})
export class PersonLocationComponent implements OnInit {
  
  center!: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  @Input() coords!: PersonLocation; 
  @Input() lable!: string; 
  markers: any[] = [];
  constructor() { 

  }

  ngOnInit(): void {
    this.center = {
      lat: this.coords.latitude ?? 0,
      lng: this.coords.longitude ?? 0,
    }

    this.markers.push({
      position: {
        lat: this.coords.latitude,
        lng: this.coords.longitude ?? 0,
      },
      label: {
        color: 'white',
        text: this.lable,
      },
      title: this.lable,
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }

}
