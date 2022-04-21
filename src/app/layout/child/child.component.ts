import { DoSomethingService } from './../do-something.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name: string;
  public child: string;
  public serviceContentA; string;

  constructor(
    private doSomething: DoSomethingService
  ) {
    console.log(`Not getting value: ${this.name}`);
    this.child = 'Child defined in constructor';
    this.serviceContentA = doSomething.getText();
    console.log(`serviceContentA defined in constructor: ${this.serviceContentA}`);
  }

  ngOnInit(): void {
    console.log(`Child getting name: ${this.name}`)
    this.child = 'Child defined on ngInit';
  }

}
