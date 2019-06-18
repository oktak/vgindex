import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readme-cont',
  templateUrl: './readme-cont.component.html',
  styleUrls: ['./readme-cont.component.scss']
})
export class ReadmeContComponent implements OnInit {
  code = '';
  codePath = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('apiId');
    // this.code = id;
    // this.codePath = 'assets/README-' + id + '.md';
    this.route.paramMap.subscribe(params => {
      this.code = params.get('apiId');
      this.codePath = 'assets/README-' + this.code + '.md';
    });
  }

}
