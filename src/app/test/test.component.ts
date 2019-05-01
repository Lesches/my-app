import { Component, OnInit } from '@angular/core';
//import {window} from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public name = '';
public myId = 'testId';
public isDisabled = true;
public successClass = 'text-success'
public siteUrl = window.location.href;
public hasError = false;
public isSpecial = true;
public greeting = '';
public messageClasses = {
  'text-success': !this.hasError,
  'text-danger': this.hasError,
  'text-special': this.isSpecial
}

public titleStyles = {
  color: 'blue',
  fontStyle: 'italic'
}

public displayName = true;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return 'Welcome ' + this.name;
  }
logMessage(e) {

  console.log(e);
}
}
