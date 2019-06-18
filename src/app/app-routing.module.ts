import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SwaggerListComponent } from './swagger-list/swagger-list.component';
import { ReadmeContComponent } from './readme-cont/readme-cont.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api/:apiId', component: SwaggerListComponent },
  { path: 'readme/:apiId', component: ReadmeContComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
