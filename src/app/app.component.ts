import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // styleUrls: ['../../node_modules/swagger-ui/dist/swagger-ui.css', './app.component.scss']
  // styleUrls: ['/node_modules/swagger-ui/dist/swagger-ui.css', './app.component.scss']
})

export class AppComponent implements OnDestroy, OnInit {
  title = 'myapp';
  product = ['a','v'];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit () {
  }

  // share () {
  //   console.log('share000')
  // }

  // onNotify() {
  //   window.alert('You will be notified when the product goes on sale');
  // }
  onCloseSidebar () {
  //
  }
}
