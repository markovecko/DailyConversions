import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ConversionDetailsPage } from '../conversion-details/conversion-details';

@Component({
    templateUrl: 'conversion-details-running.html'
})

export class ConversionDetailsRunningPage extends ConversionDetailsPage{
item;
    constructor(
        public navCtrl: NavController,
        navParams: NavParams,
        protected viewCtrl: ViewController){
            super(navCtrl, navParams, viewCtrl);
        this.item = navParams.get('item');
       
        if(this.item.convert == null)
        {
            this.item.convert = this.convert;
            this.item.inverseConvert = this.inverseConvert;
            this.item.toMMSS = this.toMMSS;
        }
    }

    toMMSS = function toMMSS (totalSeconds) {
        var seconds = totalSeconds < 60 ? "00" : totalSeconds % 60;
        var secondsStr = "";
        if(seconds == 0)
            secondsStr = "00";
        else if(seconds < 10)
            secondsStr = "0" + seconds;
        else
            secondsStr = seconds.toString();
        
        var minutes =Math.floor(totalSeconds / 60);
        var minutesStr = "";
        if(minutes == 0)
            minutesStr = "00";
        else if(minutes < 10)
            minutesStr = "0" + minutes;
        else
            minutesStr = minutes.toString();

        return minutesStr+':'+secondsStr;
    }

    convert =  function(){
        this.convertedValue = Math.round( this.value * 1.609 );
        this.convertedValueStr = this.toMMSS(this.convertedValue);
        this.valueStr = this.toMMSS(this.value);
     }

     inverseConvert = function(){ 
        this.convertedValue = Math.round( this.value / 1.609 );
        this.convertedValueStr = this.toMMSS(this.convertedValue);
        this.valueStr = this.toMMSS(this.value);
     }

    reverse(item){
        var reversedItem = {
            'minValue': this.item.minValue,
            'maxValue': this.item.maxValue,
            'step': this.item.step,
            'value': this.item.convertedValue,
            'convertedValue': this.item.value,
            'valueStr': this.item.convertedValueStr,
            'convertedValueStr': this.item.valueStr,
            'label': this.item.convertedLabel,
            'convertedLabel': this.item.label,
            'convert': this.item.inverseConvert,
            'inverseConvert': this.item.convert,
            'toMMSS': this.toMMSS
        };
        
        this.navCtrl.push(ConversionDetailsRunningPage, { item: reversedItem });
        this.navCtrl.remove(1,1);
    }
}
