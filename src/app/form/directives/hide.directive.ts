import { Directive, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[stringHide]',
  host: {
    '(blur)': 'onBlur($event)'
  },
})
export class HideDirective {
  @Output() public stringChange: EventEmitter<any>;
  @Input() hideLength: number = 2;
  

  constructor() {
    this.stringChange = new EventEmitter();
  }

  public onBlur(ev: Event) {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    let str = htmlInputElement.value;
    if (str.length > this.hideLength) {
      let lastChars =  str.substring(str.length - this.hideLength, str.length);
      let fistsChars = str.substring(0, str.length - this.hideLength).replace(/./g, '*');
      htmlInputElement.value = fistsChars + lastChars
    }
  }

}
