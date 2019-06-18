import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-function-list',
  templateUrl: './function-list.component.html',
  styleUrls: ['./function-list.component.css']
})
export class FunctionListComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  readmes = [{
    'code': 'kp',
    'name': 'Key Phrases Extraction'
  },
  {
    'code': 'pos',
    'name': 'Part of Speech'
  },
  {
    'code': 'gensim',
    'name': 'Gensim'
  }];
  constructor() { }

  ngOnInit() {
  }

  someMethod() {
    // this.trigger.openMenu();
  }

}