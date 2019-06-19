import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';

import {NgxMdModule} from 'ngx-md';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {FunctionListComponent} from './function-list/function-list.component';
import {SwaggerListComponent} from './swagger-list/swagger-list.component';
import {ReadmeContComponent} from './readme-cont/readme-cont.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionListComponent,
    SwaggerListComponent,
    ReadmeContComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxMdModule.forRoot(),
    FlexLayoutModule,
    CardModule,
    SidebarModule,
    ToolbarModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
