import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NbLayoutModule, NbMenuModule, NbSidebarModule, NbSidebarService, NbThemeModule} from '@nebular/theme';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SuperLayoutComponent } from './shared/layouts/super-layout/super-layout.component';
import { HeaderLayoutComponent } from './shared/layouts/header-layout/header-layout.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.router';
import {NgxGaugeModule} from 'ngx-gauge';

@NgModule({
  declarations: [
    AppComponent,
    SuperLayoutComponent,
    HeaderLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    NbThemeModule.forRoot({name: 'corporate'}),
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NgbModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
