import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUrl;
  private _subject = new Subject<any>();

  setUrl(url){
    this.currentUrl = url;
    this._subject.next(this.currentUrl);
  }

  getUrl(): Observable<any> {
    return this._subject.asObservable();
  }
  constructor() { }
}
