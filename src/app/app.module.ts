import { BrowserModule } from '@angular/platform-browser';

import { NgxMdModule } from 'ngx-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionListComponent } from './function-list/function-list.component';
import { SwaggerListComponent } from './swagger-list/swagger-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import {ReadmeContComponent} from './readme-cont/readme-cont.component';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeComponent} from './home/home.component';
import {CardModule} from 'primeng/card';

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
    AppRoutingModule,
    HttpClientModule,
    NgxMdModule.forRoot(),
    FlexLayoutModule,
    BrowserAnimationsModule,
    CardModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
