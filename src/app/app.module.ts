import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateColorSelectorComponent } from './template-color-selector/template-color-selector.component';
import { ReactiveColorSelectorComponent } from './reactive-color-selector/reactive-color-selector.component';
import { TemplateColorMultiSelectorComponent } from './template-color-multi-selector/template-color-multi-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateColorSelectorComponent,
    ReactiveColorSelectorComponent,
    TemplateColorMultiSelectorComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
