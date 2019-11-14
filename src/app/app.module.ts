import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MarkdownModule } from 'ngx-markdown';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import { RenderComponent } from './components/render/render.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
