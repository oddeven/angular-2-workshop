import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app-component';
import {CalculatorComponent} from './calculator-component';
import {CalculationService} from './calculation-service';
import {LogService} from './log-service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CalculatorComponent],
  bootstrap: [AppComponent],
  providers: [CalculationService, LogService]
})
export class AppModule {

}
