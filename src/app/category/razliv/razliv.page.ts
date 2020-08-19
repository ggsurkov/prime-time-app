import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-razliv',
    templateUrl: './razliv.page.html',
    styleUrls: ['./razliv.page.scss'],
})
export class RazlivPage implements OnInit {
    public beers: { name: string, category: string }[] = []
    public beersView: { name: string, category: string }[] = []
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

    constructor(public nav: NavController) {
    }

    ngOnInit() {
        this.beers = this.initBeers();
        this.beersView = this.initBeers();
    }

    private initBeers(): any[] {
        return [
            {name: 'IPA Number One', category: 'IPA'},
            {name: 'Афанасий', category: 'Светлое'},
            {name: 'Лидское', category: 'Светлое'},
            {name: 'Крюгер', category: 'Темное'},
            {name: 'Вайсберг', category: 'Пшеничное'},
            {name: 'Эдинберг', category: 'Пшеничное'},
            {name: 'Double Chocolate', category: 'Стаут'},
            {name: 'NewCastle', category: 'Porter'},
            {name: 'Kreek', category: 'Ламбик'},
            {name: 'Сакура', category: 'Сидр'},
            {name: 'Дюшес', category: 'Лимонад'},
            {name: 'Квас Афанасий', category: 'Квас'},
            {name: 'Квас Хлебный', category: 'Квас'}
        ]
    }

    public filterBeers(ev: any): void {
        if (ev.detail.value.length === 0) {
            this.beersView = this.initBeers();
        }
        if (ev.detail.value.length > 0) {
            this.beersView = [];
            this.beers.forEach((beer) => {
                ev.detail.value.forEach((filteredCat: string) => {
                    if (beer.category === filteredCat) {
                        this.beersView.push(beer);
                    }
                })
            })
        }
    }

    public backToCategory():void {
        this.nav.navigateBack('/tabs/tab2');
    }

    public goToCart(): void {
        this.nav.navigateBack('/cart');
    }
}
