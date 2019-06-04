import { Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // styleUrls: ['../../node_modules/swagger-ui/dist/swagger-ui.css', './app.component.scss']
  // styleUrls: ['/node_modules/swagger-ui/dist/swagger-ui.css', './app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'myapp';
  constructor() {
  }

  ngOnInit () {
    SwaggerUI({
      dom_id: '#myDomId',
      // url: 'http://localhost:4200/assets/swagger.json' || 'http://localhost:4200/assets/swagger-demo.yaml'
      url: 'http://localhost:4200/assets/swagger-gensim.yaml'
    })
  }
}
