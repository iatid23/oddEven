import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  speedIntreval = 1000;
  interval;
  i:number=0;
  @Output() indexNumber = new EventEmitter<number>(); //trigger start
  @Output() emitEvent = new EventEmitter<Event>();
  disableButton = true;
  defC;
  hC;
  chk = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.disableButton = !this.disableButton;
    this.interval = setInterval(()=>{ 
      console.log(this.i);
      this.indexNumber.emit(this.i);
      this.i++;
      console.log(this.speedIntreval);
    }, this.speedIntreval);
  }

  onEndGame(){
    clearInterval(this.interval);
    this.disableButton = !this.disableButton;
    
    

  }

  onClear(){
    this.emitEvent.emit();
    this.i=0;
    this.onSpeedClear();

  }

  onSpeedUp(){
    clearInterval(this.interval);
    this.speedIntreval = this.speedIntreval/2;
    this.interval = setInterval(()=>{ 
      console.log(this.i);
      this.indexNumber.emit(this.i);
      this.i++;
      console.log(this.speedIntreval);
    }, this.speedIntreval);
  }
  onSpeedDown(){
    clearInterval(this.interval);
    this.speedIntreval = this.speedIntreval*2;
    this.interval = setInterval(()=>{ 
      console.log(this.i);
      this.indexNumber.emit(this.i);
      this.i++;
      console.log(this.speedIntreval);
    }, this.speedIntreval);
  }
  onSpeedClear(){
    clearInterval(this.interval);
    this.speedIntreval = 1000;
    this.interval = setInterval(()=>{ 
      console.log(this.i);
      this.indexNumber.emit(this.i);
      this.i++;
      console.log(this.speedIntreval);
    }, this.speedIntreval);//run this thang every 2 seconds
  }

  onShow(){
    this.chk = !this.chk;
  }


}
