import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber:number[]= [];
  evenNumber:number[] = [];
  ;

  intervalNumber = 0;

  onIntervalRun(event: number){
    this.intervalNumber = event;
    if (this.intervalNumber % 2 !== 0 ){
      this.oddNumber.push(event);
    
    }else{
      this.evenNumber.push(event);
    }
    console.log(this.intervalNumber);
  }
}
