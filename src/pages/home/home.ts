import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StartPage } from '../start/start';
import { ProductsListPage } from '../products-list/products-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private mainContent: any;
  private listOptions: PageOption[] = [{title: "Analisis", icon:"analytics", page: ""}, {title: "Libro cuentas", icon:"md-book", page: ""}, {title: "Productos", icon:"md-clipboard", page: ProductsListPage}];

  constructor(public navCtrl: NavController) {
    this.mainContent = StartPage;
  }


  private goTo(index: number): void {
    this.navCtrl.push(this.listOptions[index].page);
  }

}
interface PageOption {
  title: String;
  icon: String;
  page: any;
}
