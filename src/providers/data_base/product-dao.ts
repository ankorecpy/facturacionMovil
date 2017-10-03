import { Injectable } from '@angular/core';
import { Product } from '../concrete/product';

@Injectable()
export class ProductDao {


    private productsList: Product[];


    public constructor() {
        this.productsList = [];
        this.productsList.push(new Product( 1, "Panal de huevos", 10000));
        this.productsList.push(new Product( 2, "lb Conejo", 20000));
        this.productsList.push(new Product( 3, "1/2 panal de huevos", 5000));
        this.productsList.push(new Product( 4, "bolsa Rosquilla", 2000));
        this.productsList.push(new Product( 5, "otros", 3000));
        this.productsList.push(new Product( 6, "varios", 5000));
        this.productsList.push(new Product( 6, "varios", 5000));
        this.productsList.push(new Product( 6, "varios", 5000));
        this.productsList.push(new Product( 6, "varios", 5000));
        this.productsList.push(new Product( 6, "varios", 5000));
        this.productsList.push(new Product( 6, "varios", 5000));
    }


    public getProductsList(): Product[] {
        return this.productsList;
    }
    public addProduct(newProduct: Product): void {
        this.productsList.push(newProduct);
    }

    public setProduct(id: number, newName: String, newValue: number): void {
        //TODO change values in database
    }
    public removeProduct(id: number): void {
        //TODO removing of producto
    }
}