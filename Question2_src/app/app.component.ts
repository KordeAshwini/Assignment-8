import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  //title = 'CommunicationOfComp';
  public parentMessage = "";

  public sendMessage()
  {
    this.parentMessage = "Hello Child ! from Parent component";
  }


  public Message :any;
  
  public ReceiveMsg($event: any)
  {
    this.Message = $event;
  }
}
