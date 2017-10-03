import { OperationEconomic } from '../models/operation-economic';
import { Product } from './product';


export class Purchase extends OperationEconomic {


    private attendant: String;
    private producstList: Product[];


    public constructor(id: number, value: number, date: Date, paidValue: number, attendant: String) {        
        super();
        this.id = id;
        this.value = value;
        this.date = date;
        this.paidValue = paidValue;
        this.attendant = attendant;
        this.producstList = [];
    }


    public getAttendant(): String {
        return this.attendant;
    }
    public setAttendant(newAttendant: String) {
        this.attendant = newAttendant;
    }


    public addProduct(newProduct: Product): void {
        this.producstList.push(newProduct);
    }
}