import {Injectable, OnInit} from "@angular/core";
import {StorageService} from "../storage.service";
import {CartStorageModel, initCartStorage} from "./cart-storage.model";
import {replaceInArrayByParam} from "../../utils/replace-in-array.util";
import {Storage} from "@ionic/storage";

@Injectable({
    providedIn: 'root'
})

export class CartStorageService extends StorageService {
    constructor(public storage: Storage) {
        super(storage);
    }

    public initCartStorageDefaultData(): void {
        const defaultData: CartStorageModel = initCartStorage();
        this.setObject('items', defaultData.items)
        this.set('totalCartCost', defaultData.totalCartCost)
        console.log('initCartStorageDefaultData successfully!');
    }

    public async updateItem(updatedItem: any): Promise<any> {
        try {
            this.getObject('items').then((itemsFromStorage) => {
                if (!itemsFromStorage.find((item) => updatedItem.name === item.name)) {
                    itemsFromStorage.push(updatedItem);
                    this.setObject('items', itemsFromStorage);
                    console.log('updateItem successfully!', updatedItem);
                }
                if (itemsFromStorage.length > 0 && itemsFromStorage.find((item) => updatedItem.name === item.name)) {
                    const updatedItems = replaceInArrayByParam(itemsFromStorage, updatedItem, 'name');
                    if (updatedItem.totalCount === 0) {
                        updatedItems.splice(updatedItems.indexOf(updatedItem), 1);
                    }
                    this.setObject('items', updatedItems).then(() => {
                        console.log('updateItem successfully!', updatedItem);
                        return null;
                    });
                }
            });
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }
}
