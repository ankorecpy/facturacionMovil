export abstract class Operation {

    protected id: number;
    protected value: number;
    protected date: Date;


    public getId(): number {
        return this.id;
    }


    public getValue(): number {
        return this.value;
    }
    public setValue(newValue: number): void {
        this.value = newValue;
    }


    public getDate(): Date {
        return this.date;
    }
    public setDate(newDate: Date): void {
        this.date = newDate;
    }
}