import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-receive-message2',
  templateUrl: './receive-message2.component.html',
  styleUrls: ['./receive-message2.component.css'],
})
export class ReceiveMessage2Component implements OnInit {
  messages: any[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((message) => {
      if (message) {
        this.messages.push(message);
      } else {
        this.messages = [];
      }
    });
  }
}
