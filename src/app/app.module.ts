import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewportComponent } from './viewport/viewport.component';
import { TableComponent } from './table/table.component';
import { TabledataService } from './tabledata.service';
import { HttpClientModule } from '@angular/common/http';
import { FiltertableComponent } from './filtertable/filtertable.component';
import { ReactiveFormsModule, FormsModule } from  '@angular/forms'
@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ViewportComponent,
    TableComponent,
    FiltertableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TabledataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
