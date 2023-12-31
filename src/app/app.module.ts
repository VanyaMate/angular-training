import { ProductComponent } from '@/app/components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';


@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        GlobalErrorComponent,
    ],
    imports     : [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers   : [],
    bootstrap   : [ AppComponent ],
})
export class AppModule {
}
