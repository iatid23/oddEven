import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  i:number=0;
  @Output() indexNumber = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval=setInterval(()=>{ 
      console.log(this.i);
      this.indexNumber.emit(this.i);
      this.i++;
    }, 1000);//run this thang every 2 seconds
  }

  onEndGame(){
    clearInterval(this.interval);

  }

}
