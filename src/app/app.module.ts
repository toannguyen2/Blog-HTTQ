import {BrowserModule}             from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule}      from './app-routing.module';
import {AppComponent}          from './app.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {LoginFormComponent}    from './components/login-form/login-form.component';
import {HomeComponent}         from './components/home/home.component';
import {NavbarComponent}       from './components/navbar/navbar.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor}                      from './helpers/jwt.interceptor';
import {appInitializer}                      from './helpers/app.initializer';
import {ErrorInterceptor}                    from './helpers/error.interceptor';
import {AuthenticationService}               from './services/authentication.service';

@NgModule({
    declarations: [
        AppComponent,
        RegisterFormComponent,
        LoginFormComponent,
        HomeComponent,
        NavbarComponent
    ],
    imports     : [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers   : [
        {provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthenticationService]},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    ],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
