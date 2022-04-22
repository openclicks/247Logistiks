import { Component } from '@angular/core';
import { Message, PrimeNGConfig } from 'primeng/api';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracker';
  msgs1: Message[];
  currentUrl;

  constructor(private primengConfig: PrimeNGConfig, private ds: DataService) {}

  ngOnInit() {
    this.msgs1 = [
        // {severity:'success', summary:'Success', detail:'Message Content'},
        {severity:'info', summary:'COVID-19:', detail:' We are monitoring the impact of the COVID-19 outbreak. All protocols are observed.'}
        // {severity:'warn', summary:'Warning', detail:'Message Content'},
        // {severity:'error', summary:'Error', detail:'Message Content'}
    ];

    this.ds.getUrl()
      .subscribe(url => {
        // console.log('appp', url);
        this.currentUrl = url;
      })

    this.primengConfig.ripple = true;
}
}
