import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {ChatComponent} from "./chat/chat.component";
import {LoginGuard} from "./guard/login.guard";
import {UnsavedGuard} from "./guard/unsaved.guard";

const routes: Routes = [
  //默认路由
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent,
    canActivate:[LoginGuard],canDeactivate:[UnsavedGuard]
  },
  { path: 'heroes', component: HeroesComponent },
  { path: 'chat', component: ChatComponent,outlet:'aux'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers:[LoginGuard,UnsavedGuard]
})
export class AppRoutingModule {}
