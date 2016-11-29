import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app-component';
import {TimerSignalComponent} from './timer-signal-component';
import {TimerSignalFieldComponent} from './timer-signal-field-component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TimerSignalComponent, TimerSignalFieldComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
