import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {RazlivViewModel} from "../../models/razliv-view.model";
import {MeasureEnum} from "../../dictionary/measure.enum";
import {RazlivTypesEnum} from "../../dictionary/razliv-types.enum";
import {ItemTypesEnum} from "../../dictionary/item-types.enum";
import {CartStorageService} from "../../storage/cart-storage/cart-storage.service";

@Component({
    selector: 'app-razliv',
    templateUrl: './razliv.page.html',
    styleUrls: ['./razliv.page.scss'],
})
export class RazlivPage implements OnInit {
    public razlivTypes: typeof RazlivTypesEnum = RazlivTypesEnum;
    public measure: typeof MeasureEnum = MeasureEnum;
    public itemTypesEnum: typeof ItemTypesEnum = ItemTypesEnum;
    public razliv: RazlivViewModel[] = []
    public razlivView: RazlivViewModel[] = []
    public category: string[] = [
        'Светлое',
        'Темное',
        'Пшеничное',
        'Стаут',
        'Porter',
        'IPA',
        'Ламбик',
        'Сидр',
        'Лимонад',
        'Квас'
    ]

    constructor(public nav: NavController, public cartStorageService: CartStorageService) {
    }

    ngOnInit() {
        this.razliv = this.initBeers();
        this.razlivView = this.initBeers();
    }

    public filterBeers(ev: any): void {
        if (ev.detail.value.length === 0) {
            this.razlivView = this.initBeers();
        }
        if (ev.detail.value.length > 0) {
            this.razlivView = [];
            this.razliv.forEach((beer) => {
                ev.detail.value.forEach((filteredCat: string) => {
                    if (beer.type === filteredCat) {
                        this.razlivView.push(beer);
                    }
                })
            })
        }
    }

    public itemChanged(razlivItem: RazlivViewModel): void {
        this.cartStorageService.updateItem(razlivItem);
    }

    public backToCategory(): void {
        this.nav.navigateBack('/tabs/tab2');
    }

    public goToCart(): void {
        this.nav.navigateBack('/cart');
    }

    private initBeers(): RazlivViewModel[] {
        return [
            new RazlivViewModel('Лидское', 90, this.razlivTypes.LIGHT, 0, 0, this.measure.LITER, '4,5%', 'IBU 10', '10%'),
            new RazlivViewModel('Курская дуга', 150, this.razlivTypes.LIGHT, 0, 0, this.measure.LITER, '5,5%', 'IBU 15', '12%'),
            new RazlivViewModel('Крюгер', 120, this.razlivTypes.DARK, 0, 0, this.measure.LITER, '5,0%', 'IBU 20', '13,5%'),
        ]
    }
}
