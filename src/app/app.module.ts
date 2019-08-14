import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    CustomHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
