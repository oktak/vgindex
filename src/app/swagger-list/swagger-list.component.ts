import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-swagger-list',
  templateUrl: './swagger-list.component.html',
  styleUrls: ['./swagger-list.component.css']
})
export class SwaggerListComponent implements OnInit {
  id;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('apiId');
      SwaggerUI({
        dom_id: '#myDomId',
        // url: 'http://localhost:4200/assets/swagger.json' || 'http://localhost:4200/assets/swagger-demo.yaml'
        url: 'http://localhost:4200/assets/swagger-' + this.id + '.yaml'
      })
    });
  }
}
