import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MdlModule} from '@angular-mdl/core';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {TaskComponent} from './task/task.component';
import {HomeComponent} from './task/home/home.component';
import {NotFoundPageComponent} from './task/not-found-page/not-found-page.component';

const appRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'task', component: TaskComponent },
   { path: '**', component: NotFoundPageComponent }
   ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent,
    HomeComponent,
    NotFoundPageComponent,
],
  imports: [
    BrowserModule,
    MdlModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
