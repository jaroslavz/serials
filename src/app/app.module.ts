import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerialsService } from './services/serials.service';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';
import {InputTextModule} from 'primeng/inputtext';
import { SerialsListComponent } from './serials-list/serials-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayToStringPipe,
    SerialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    InputTextModule
  ],
  providers: [SerialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
