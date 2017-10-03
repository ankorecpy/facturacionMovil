import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { Product } from '../../providers/concrete/product';


import { ProductDao } from '../../providers/data_base/product-dao';


@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  private product: Product;
  private id: number = 0;
  private name: String = "";
  private value: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public productDao: ProductDao) {
  }

  ionViewWillEnter() {
    this.product = this.navParams.get('product');
    if (this.product != null) {
      this.id = this.product.getId();
      this.name = this.product.getName();
      this.value = this.product.getValue();
    }
  }

  private save():void {
    if (this.product == null) {
      this.productDao.addProduct(new Product(this.id, this.name, this.value));
    } else {
      this.productDao.setProduct(this.id, this.name, this.value);
      this.product.setName(this.name);
      this.product.setValue(this.value);
    }
    this.navCtrl.pop();
  }
  private remove(): void {
    this.productDao.removeProduct(this.product.getId());
  }

}
