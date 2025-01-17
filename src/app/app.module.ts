import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from '../dataBinding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIfComponent } from './ngIf/ng-if/ng-if.component';
import { NgForComponent } from './ngFor/ng-for/ng-for.component';
import { NgFor, NgIf } from '@angular/common';
import { NgClassComponent } from './ng-class/ng-class.component';
import { SignalsComponent } from './Signals/signals/signals.component';
import { ControlFlowComponent } from './controlFlow/control-flow/control-flow.component';
import { FormsComponent } from './Forms/forms/forms.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { GetComponent } from './API/get/get.component';
import { PostComponent } from './API/post/post.component';
import { DeleteComponent } from './API/delete/delete.component';
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    SignalsComponent,
    ControlFlowComponent,
    FormsComponent,
    ReactiveFormComponent,
    GetComponent,
    PostComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIf,
    NgFor,
    ReactiveFormsModule,
    // HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
