import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app-component';
import {CalculatorComponent} from './calculator-component';
import {CalculationService} from './calculation-service';
import {LogService} from './log-service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, CalculatorComponent],
  bootstrap: [AppComponent],
  providers: [CalculationService, LogService]
})
export class AppModule {

}
