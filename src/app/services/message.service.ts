import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private msgPublisher = new Subject<any>();

  sendMessage(message: string) {
    this.msgPublisher.next({ text: message });
  }

  clearMessages() {
    this.msgPublisher.next(null);
  }

  getMessage(): Observable<any> {
    return this.msgPublisher.asObservable(); // asObservable converts Subject to observable
  }
}
