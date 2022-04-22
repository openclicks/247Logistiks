import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeIcons } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  trackingNumber;
  events1: any[];
  loaded=false;

  originCity = environment.originCity;
  originCountry = environment.originCountry;
  destCountry = environment.destCountry;
  destCityOrState = environment.destCityOrState;
  destAddress = environment.destAddress;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


      this.route.paramMap.subscribe(params => {
      // console.log(params);
       let id = params.get('id');
       //let products: Product[]=[];
       this.trackingNumber = id;
      //  console.log('tr #', this.trackingNumber);
      });


      this.events1 = [
        {status: 'Ordered', date: '13/04/2022 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#ad3559', image: 'game-controller.jpg', details: 'Package Ordered. Payment confirmed. '},
        {status: 'Processing', date: '13/04/2022 11:00', icon: PrimeIcons.COG, color: '#ad3559', details: 'Order confirmed. Preparing to ship package'},
        {status: 'Shipped', date: '14/04/2022 16:15', icon: PrimeIcons.TABLE, color: '#ad3559', details: 'Package has left origin'},
        {status: 'In-Transit', date: '15/04/2022 10:00', icon: PrimeIcons.SEND, color: '#ad3559', details: 'Expected Arrival Date on May 15, 2022'}
        // {status: 'In-Transit', date: '07/12/2021 18:00', icon: PrimeIcons.SEND, color: '#ad3559', details: 'Package has arrived at Port of St Pierre, St Pierre and Miquelon'},
        // {status: 'In-Transit', date: '10/12/2021 23:20', icon: PrimeIcons.SEND, color: '#ad3559', details: 'Package has arrived at Port of Quebec, Quebec, Canada'},
        // {status: 'In-Transit', date: '21/12/2021 11:40', icon: PrimeIcons.SEND, color: '#ad3559', details: 'Package has arrived at Port Miami, Florida, US'}

        // {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
    ];

    setTimeout (() => {
      this.loaded = true;
    }, 4000);

    //setTimeout(this.loadContent, 3000);
  }

  loadContent(){
    this.loaded = true;
  }

}
