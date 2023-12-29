import { Component } from '@angular/core';
import { Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
     @Output() public messageEvent = new EventEmitter();

     public SendMsg()
     {
        this.messageEvent.emit("Hello Parent ! from Child component");
     }

     @Input() public message: any;
}
