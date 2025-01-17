import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from '../dataBinding/data-binding.component';
import { NgIfComponent } from './ngIf/ng-if/ng-if.component';
import { NgForComponent } from './ngFor/ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { SignalsComponent } from './Signals/signals/signals.component';
import { ControlFlowComponent } from './controlFlow/control-flow/control-flow.component';
import { FormsComponent } from './Forms/forms/forms.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { GetComponent } from './API/get/get.component';
import { provideHttpClient } from '@angular/common/http';
import { PostComponent } from './API/post/post.component';
import { DeleteComponent } from './API/delete/delete.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  // { path:'', component: AppComponent},
  { path: 'databinding', component: DataBindingComponent },
  { path: 'ngif', component: NgIfComponent},
  { path: 'ngfor', component: NgForComponent},
  { path: 'ngclass', component: NgClassComponent},
  { path: 'signals', component: SignalsComponent},
  { path: 'controlflow', component: ControlFlowComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'reactiveforms', component: ReactiveFormComponent},
  { path: 'getapi', component: GetComponent},
  { path: 'postapi', component: PostComponent},
  { path: 'deleteapi', component: DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideHttpClient()],
})
export class AppRoutingModule { }
