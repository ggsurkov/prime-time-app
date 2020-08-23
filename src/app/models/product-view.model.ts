import {RazlivTypesEnum} from "../dictionary/razliv-types.enum";

export class ProductViewModel {
    name: string;
    price: number;
    type: RazlivTypesEnum;
    totalCount: number;
    totalCost: number;

    constructor(name: string, price: number, type: RazlivTypesEnum, totalCount: number, totalCost: number) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.totalCount = totalCount;
        this.totalCost = totalCost;
    }
}
