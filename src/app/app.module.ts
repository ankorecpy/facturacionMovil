import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';
import { ProductsListPage } from '../pages/products-list/products-list';
import { AddProductPage } from '../pages/add-product/add-product';


import { ProductDao } from '../providers/data_base/product-dao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartPage,
    ProductsListPage,
    AddProductPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StartPage,
    ProductsListPage,
    AddProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductDao,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
