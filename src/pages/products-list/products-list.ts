import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { AddProductPage } from '../add-product/add-product';


import { ProductDao } from '../../providers/data_base/product-dao';


import { Product } from '../../providers/concrete/product';


@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {


  private productsList: Product[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public productDao: ProductDao) {
  }

  ionViewWillEnter() {
    this.productsList = this.productDao.getProductsList();
  }

  private goToAddProduct(): void {
    this.navCtrl.push(AddProductPage);
  }

  private goToModifyProduct(product: Product): void {
    this.navCtrl.push(AddProductPage, {product: product});
  }

}
