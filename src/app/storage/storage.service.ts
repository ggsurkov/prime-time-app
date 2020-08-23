import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(public storage: Storage) {
    }

    public async set(key: string, value: any): Promise<any> {
        try {
            const result = await this.storage.set(key, value);
            console.log('set string in storage: ' + result);
            return true;
        } catch (reason) {
            console.log(reason);
            return false;
        }
    }

    public async get(key: string): Promise<any> {
        try {
            const result = await this.storage.get(key);
            console.log('storageGET: ' + key + ': ' + result);
            if (result != null) {
                return result;
            }
            return null;
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }

    public async setObject(key: string, object: object): Promise<any> {
        try {
            const result = await this.storage.set(key, JSON.stringify(object));
            console.log('set Object in storage: ' + result);
            return result;
        } catch (reason) {
            console.log(reason);
            return false;
        }
    }

    public async getObject(key: string): Promise<any> {
        try {
            const result = await this.storage.get(key);
            if (result != null) {
                return JSON.parse(result);
            }
            return null;
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }

    public remove(key: string) {
        this.storage.remove(key);
    }

    public clear() {
        this.storage.clear();
    }

    public updateObjectByParams(objectName: string, params: any[]) {
        try {
            this.getObject(objectName).then((updatedObject: any) => {
                params.forEach((param) => {
                    updatedObject[param.key] = param.value;
                });
                this.setObject(objectName, updatedObject).then(() => {
                    console.log(objectName + ' updated successfully!', updatedObject);
                    return null;
                });
            });
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }
}
