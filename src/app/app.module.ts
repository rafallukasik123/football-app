import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './core/components/main/main.component';
import { NavComponent } from './core/components/nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {StatisticsModule} from './features/statistics/statistics.module';
import {XAuthTokenInterceptor} from './core/interceptor/x-auth-token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    StatisticsModule,
    HttpClientModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : XAuthTokenInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
