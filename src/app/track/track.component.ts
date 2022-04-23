import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  trackingNumber;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTrack(){
    // console.log('num', this.trackingNumber);

    if(this.trackingNumber){
      let id = this.trackingNumber;
      this.router.navigate(['/tracking', id])
    }else{
      alert('Please provide a tracking number')
    }



  }

}
