import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MdlModule} from '@angular-mdl/core';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {TaskComponent} from './content/task/task.component';
import {HomeComponent} from './content/home/home.component';
import {NotFoundPageComponent} from './content/not-found-page/not-found-page.component';
import {DrawerComponent} from './layout/drawer/drawer.component';
import {ContentComponent} from './content/content/content.component';
import {CardComponent} from './content/card/card.component';
import {InventorComponent} from './content/inventor/inventor.component';
import {IfelseComponent} from './content/ifelse/ifelse.component';

import {HttpClientModule} from '@angular/common/http';
import { BackendService } from './services/backend.service';

import { FormsModule } from '@angular/forms';

import {FilterPipe} from './filter.pipe';
import {HttpModule} from '@angular/http';

import {WarehousesService} from './services/warehouses.service';

const appRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'task', component: TaskComponent },
   { path: 'article', component: ContentComponent },
   { path: 'warehouse', component: IfelseComponent },
   { path: 'card', component: CardComponent },
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
    DrawerComponent,
    ContentComponent,
    CardComponent,
    InventorComponent,
    IfelseComponent,
    FilterPipe
],
  imports: [
    BrowserModule,
    MdlModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [BackendService, WarehousesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
