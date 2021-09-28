import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEvent } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private ds: DataService) { }

  event$;
  currentRoute;
  isToggled = false;
  ngOnInit(): void {
    // console.log('url',this.router.url);
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if(event instanceof NavigationStart) {
            console.log(event.url);
            this.currentRoute = event.url;
            this.ds.setUrl(this.currentRoute);
          }
        })
    
  }

  onToggle(){
    this.isToggled = !this.isToggled;
  }

  onGoToPage(page){
    let p = `/${page}`;
    this.onToggle();
    this.router.navigate([p]);
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }



}
