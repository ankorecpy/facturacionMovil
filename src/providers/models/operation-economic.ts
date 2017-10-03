import { Operation } from './operation';

export abstract class OperationEconomic extends Operation {

    protected paidValue: number;


    public getPaidValue(): number {
        return this.paidValue;
    }
    public setPaidValue(newPaidValue: number): void {
        this.paidValue = newPaidValue;
    }
}