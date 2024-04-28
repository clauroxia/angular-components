import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number;
  constructor() {
    this.counter = 0;
  }
  increment() {
    this.counter++;
  }
  incrementBy10() {
    this.counter += 10;
  }
  decrement() {
    this.counter--;
  }
  decrementBy10() {
    this.counter -= 10;
  }
  reset() {
    this.counter = 0;
  }
  random() {
    this.counter = Math.floor(Math.random() * 41) - 20;
  }
}
