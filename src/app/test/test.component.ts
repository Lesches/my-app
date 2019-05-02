import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {window} from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
@Input('parentData') public name;
@Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
   // return 'Welcome ' + this.name;
  }
logMessage(e) {

  console.log(e);
}

fireEvent(){
this.childEvent.emit('Hey Codevolution');
}
}
