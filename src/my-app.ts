import { incrementValue } from "./increment";

export class MyApp {
  message = "Hello world!";
  count = 0;
  countButton!: HTMLButtonElement;
  
  bound(){
    this.countButton.addEventListener('click', () => this.count = this.count + incrementValue);
  }
}