import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoSomethingService {

  constructor() { }

  getText(): string {
    return 'This is text';
  }
}
