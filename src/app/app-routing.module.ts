import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionListComponent } from './function-list/function-list.component';
import { SwaggerListComponent } from './swagger-list/swagger-list.component';

const routes: Routes = [
  { path: '', component: FunctionListComponent },
  { path: 'api/:apiId', component: SwaggerListComponent },
  { path: 'kp', component: SwaggerListComponent },
  { path: 'pos', component: SwaggerListComponent },
  { path: 'gensim', component: SwaggerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
