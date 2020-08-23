import {ProductViewModel} from "./product-view.model";
import {MeasureEnum} from "../dictionary/measure.enum";
import {RazlivTypesEnum} from "../dictionary/razliv-types.enum";

export class RazlivViewModel extends ProductViewModel {
    measure: MeasureEnum;
    alk: string;
    bitterness: string;
    density: string;

    constructor(name: string,
                price: number,
                type: RazlivTypesEnum,
                totalCount: number,
                totalCost: number,
                measure: MeasureEnum,
                alk: string,
                bitterness: string,
                density: string) {
        super(name, price, type, totalCount, totalCost);
        this.measure = measure;
        this.alk = alk;
        this.bitterness = bitterness;
        this.density = density;
    }
}
