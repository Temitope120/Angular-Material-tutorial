import { Component } from '@angular/core';
// import {Component} from '@angular/core';  not same  version
// import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  notifications = 2;
  notification = 0;
  showSpinner = false;
  opened = false;
  // selectedValue :string;
  loadData() {
    this.showSpinner = true
    setTimeout(() => {
      this.showSpinner = false
    }, 5000);
  }

  log(state:any) {
    console.log(state)
  }


  logChange(index: any){
console.log(index)
  }
 
}

