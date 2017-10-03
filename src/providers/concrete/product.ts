export class Product {


    private id: number;
    private name: String;
    private value: number;


    public constructor(id: number, name: String, value: number) {
        this.id = id;
        this.name = name;
        this.value = value;
    }


    public getId(): number {
        return this.id;
    }


    public getName(): String {
        return this.name;
    }
    public setName(newName: String): void {
        this.name = newName;
    }


    public getValue(): number {
        return this.value;
    }
    public setValue(newValue: number): void {
        this.value = newValue;
    }
}