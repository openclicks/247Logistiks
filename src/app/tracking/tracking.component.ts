import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  trackingNumber;
  events1: any[];
  loaded=false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


      this.route.paramMap.subscribe(params => {
      console.log(params);
       let id = params.get('id');
       //let products: Product[]=[];
       this.trackingNumber = id;
       console.log('tr #', this.trackingNumber);
      });


      this.events1 = [
        {status: 'Ordered', date: '19/11/2021 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#ad3559', image: 'game-controller.jpg', details: 'Payment confirmed. Package Ordered'},
        {status: 'Processing', date: '19/11/2021 11:00', icon: PrimeIcons.COG, color: '#ad3559', details: 'Order confirmed. Preparing to ship package'},
        {status: 'Shipped', date: '21/11/2021 16:15', icon: PrimeIcons.TABLE, color: '#ad3559', details: 'Package has left origin'},
        {status: 'In-Transit', date: '24/11/2021 10:00', icon: PrimeIcons.SEND, color: '#ad3559', details: 'Arriving on December 23, 2021'},
        {status: 'In-Transit', date: '07/12/2021 18:00', icon: PrimeIcons.SEND, color: '#ad3559', details: 'Package has arrived at Port of St Pierre, St Pierre and Miquelon'},
        {status: 'In-Transit', date: '10/12/2021 23:20', icon: PrimeIcons.SEND, color: '#ad3559', details: 'Package has arrived at Port of Quebec, Quebec, Canada'},
        {status: 'In-Transit', date: '21/12/2021 11:40', icon: PrimeIcons.SEND, color: '#ad3559', details: 'Package has arrived at Port Miami, Florida, US'}

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
