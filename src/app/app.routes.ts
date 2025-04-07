import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';

export const routes: Routes = [
    { path: 'intro', component: IntroductionComponent },
    { path: '', redirectTo: '/intro', pathMatch: 'full' } 
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
