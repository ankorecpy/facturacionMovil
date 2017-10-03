import { OperationEconomic } from '../models/operation-economic';

export class Payment extends OperationEconomic {


    private concept: String;


    public constructor(id: number, value: number, date: Date, concept: String) {
        super();
        this.id = id;
        this.value = value;
        this.date = date;
        this.concept = concept;
    }


    public getConcept(): String {
        return this.concept;
    }
    public setConcept(newConcept: String): void {
        this.concept = newConcept;
    }
}