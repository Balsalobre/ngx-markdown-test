import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { MarkdownModule } from 'ngx-markdown';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import { RenderComponent } from './components/render/render.component';
import { HttpClientModule } from '@angular/common/http';
import { TestPipesComponent } from './components/test-pipes/test-pipes.component';

// Importar locales
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SortbyPipe } from './pipes/sortby.pipe';
import { SortDatePipe } from './pipes/sort-date.pipe';

// Regitramos los locales con el nombre que queremos utilizar
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UppercasePipe,
    SortPipe,
    SortbyPipe,
    SortDatePipe
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
