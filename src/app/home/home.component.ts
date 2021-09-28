import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trackingNumber;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTrack(){
    console.log('num', this.trackingNumber);
    
    if(this.trackingNumber){
      let id = this.trackingNumber;
      this.router.navigate(['/tracking', id])
    }else{
      alert('Please provide a tracking number')
    }

    
    
  }

}
