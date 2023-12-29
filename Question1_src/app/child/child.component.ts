import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
    //public ChildText: any = "";
    @Output() public ChildEvent = new EventEmitter();

    public SendToParent(value: any)
    {
      this.ChildEvent.emit(value);
    }
}
