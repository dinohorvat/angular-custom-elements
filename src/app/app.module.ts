import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import {createCustomElement} from '@angular/elements';

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
  bootstrap: [AppComponent],
  entryComponents: [CustomButtonComponent, CustomHeaderComponent]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CustomButtonComponent,
      { injector: this.injector });
    customElements.define('my-button-element', el);
    const el2 = createCustomElement(CustomHeaderComponent,
      { injector: this.injector });
    customElements.define('custom-header', el2);
  }
}
