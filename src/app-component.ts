import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <collapsible>
      <span collapsible-title>I'm a title</span>
      <p>I'm regular content that will be inserted into the collapsible body</p>
    </collapsible>
  `
})
export class AppComponent {

}
