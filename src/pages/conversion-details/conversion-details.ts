import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'conversion-details.html'
})

export class ConversionDetailsPage {
    item;

    constructor(
        public navCtrl: NavController,
        navParams: NavParams,
        protected viewCtrl: ViewController){
        this.item = navParams.get('item');
    }

    reverse(item){
        var reversedItem = {
            'title': this.item.title,
            'color': this.item.color,
            'icon': this.item.icon,
            'minValue': this.item.minValue,
            'maxValue': this.item.maxValue,
            'step': this.item.step,
            'value': this.item.convertedValue,
            'convertedValue': this.item.value,
            'label': this.item.convertedLabel,
            'convertedLabel': this.item.label,
            'convert': this.item.inverseConvert,
            'inverseConvert': this.item.convert
        };
        
        this.navCtrl.push(ConversionDetailsPage, { item: reversedItem });
        this.navCtrl.remove(1,1);
    }
}