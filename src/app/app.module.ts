import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionListComponent } from './function-list/function-list.component';
import { SwaggerListComponent } from './swagger-list/swagger-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionListComponent,
    SwaggerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
