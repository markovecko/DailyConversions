import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { ConversionDetailsPage } from '../conversion-details/conversion-details';
import { ConversionDetailsRunningPage } from '../conversion-details/conversion-details-running';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item ={
    'minValue': 180,
    'maxValue': 720,
    'step': 5,
    'value': 300,
    'convertedValue': 480,
    'valueStr': '05:00',
    'convertedValueStr': '08:03',
    'label': 'min/km',
    'convertedLabel' : 'min/mile'
}

  items = [];
  constructor(public navCtrl: NavController) {
    this.items = [
      {
        'title': 'Temperature',
        'color': 'danger', 
        'icon': 'thermometer',
        'minValue': -50,
        'maxValue': 100,
        'step': 1,
        'value': 20,
        'convertedValue': 68,
        'label': 'C',
        'convertedLabel': 'F',
        'convert': function(){ this.convertedValue = Math.round( (this.value * 9 / 5) + 32 ); },
        'inverseConvert': function(){ this.convertedValue = Math.round( (this.value - 32 ) * 5 / 9 ); },
      },
      {
        'title': 'Gas Consumption',
        'color': 'blue',
        'icon': 'pint',
        'minValue': 0.00,
        'maxValue': 50.00,
        'step': 0.50,
        'value': 7.13,
        'convertedValue': 33.00,
        'label': 'l/100km',
        'convertedLabel': 'mpg',
        'convert': function(){ this.convertedValue = (235.214583 / this.value).toFixed(2); },
        'inverseConvert': function(){ this.convertedValue = (235.214583 / this.value ).toFixed(2); },
      }
    ];
  }

  openNavDetailsPage(item){
    this.navCtrl.push(ConversionDetailsPage, { item: item });
  }

  openNavDetailsRunningPage(item){
    this.navCtrl.push(ConversionDetailsRunningPage, { item: item });
  }
}
