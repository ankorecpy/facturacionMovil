import { OperationEconomic } from '../models/operation-economic';
import { Product } from './product';

export class Sale extends OperationEconomic {


    private buyerName: String;
    private productsList: Product[];


    constructor(id: number, value: number, date: Date, paidValue: number, buyerName: String) {        
        super();
        this.id = id;
        this.value = value;
        this.date = date;
        this.paidValue = paidValue;
        this.buyerName = buyerName;
        this.productsList = [];
    }


    public getBuyerName(): String {
        return this.buyerName;
    }
    public setBuyerName(newBuyerName: String) : void {
        this.buyerName = newBuyerName;
    }


    public addProduct(newProduct: Product): void {
        this.productsList.push(newProduct);
    }
}