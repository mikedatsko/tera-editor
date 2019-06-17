import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AceModule } from 'ngx-ace-wrapper';
import { ACE_CONFIG } from 'ngx-ace-wrapper';
import { AceConfigInterface } from 'ngx-ace-wrapper';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {
};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AceModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ACE_CONFIG, useValue: DEFAULT_ACE_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
