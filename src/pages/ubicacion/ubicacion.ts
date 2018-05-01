import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';


declare var google: any;
/**
 * Generated class for the UbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ubicacion',
  templateUrl: 'ubicacion.html',
})
export class UbicacionPage {

  map: any;
  markers:any;

  estabelecimentos = [
  {
    nome: 'Exito - Las Flores',
    endereco: 'Endereço1',
    latitude: 10.469344,
    longitude: -73.257647
  },
  {
    nome: 'SAO - la Ceiba',
    endereco: 'Endereço2',
    latitude: 10.466856,
    longitude: -73.2522165
  },
  {
    nome: 'Exito - Centro',
    endereco: 'Endereço3',
    latitude: 10.475247,
    longitude: -73.244397
  },
  {
    nome: 'Mi Futuro - Galeria',
    endereco: 'Endereço4',
    latitude: 10.472855,
    longitude: -73.242770
  },
  {
    nome: 'Mi Futuro - Mercado',
    endereco: 'Endereço5',
    latitude: 10.464577,
    longitude: -73.247847
  },
  {
    nome: 'Olimpica - La Novena',
    endereco: 'Endereço6',
    latitude: 10.476986,
    longitude: -73.248606
  },
  {
    nome: 'SAO - Megamail',
    endereco: 'Endereço7',
    latitude: 10.468375,
    longitude: -73.259101
  },
  {
    nome: 'Jumbo',
    endereco: 'Endereço8',
    latitude: 10.495092,
    longitude: -73.269444
  },
  {
    nome: 'Olimpica - Sierra Nevada',
    endereco: 'Endereço9',
    latitude: 10.487444,
    longitude: -73.278438
  },
  {
    nome: 'Exito express - Villa Ligia',
    endereco: 'Endereço10',
    latitude: 10.487212,
    longitude: -73.278075
  },
  {
    nome: 'Metro - Mayales',
    endereco: 'Endereço11',
    latitude: 10.455708,
    longitude: -73.240695
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public platform:Platform) {
  }

  

  ionViewWillEnter(){
    this.platform.ready().then(() => {
      this.initPage();
    });
  }

  initPage() {
    this.geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
    });
  }


  private loadMap(lat, lng) {
      let latLng = new google.maps.LatLng(lat, lng);

      let mapOptions = {
        center: latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      };

      let element = document.getElementById('map');

      this.map = new google.maps.Map(element, mapOptions);
      let marker = new google.maps.Marker({
        position: latLng,
        title: 'Minha Localização',
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      })
      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6>`+marker.title+`</h6>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);

      this.loadPoints();
    }

    loadPoints() {
      this.markers = [];

      for (const key of Object.keys(this.estabelecimentos)) {
        console.log(this.estabelecimentos[key].nome )
        let latLng = new google.maps.LatLng(this.estabelecimentos[key].latitude, this.estabelecimentos[key].longitude);

        let marker = new google.maps.Marker({
          position: latLng,
          title: this.estabelecimentos[key].nome
        })

        let content = `
        <div id="myid"  class="item item-thumbnail-left item-text-wrap">
          <ion-item>
            <ion-row>
              <h6>`+this.estabelecimentos[key].nome+`</h6>
            </ion-row>
          </ion-item>
        </div>
        `
        ;
        this.addInfoWindow(marker, content);
        marker.setMap(this.map);
      }

      return this.markers;
    }

    addInfoWindow(marker, content) {
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);

        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
          document.getElementById('myid').addEventListener('click', () => {
            this.goToEmpresa(marker)
          });
        });
      })
    }

    goToEmpresa(empresa) {
      alert('Click');
    }

}
