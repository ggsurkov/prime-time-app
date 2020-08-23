export interface CartStorageModel {
    items: any[];
    totalCartCost: number;
}


export function initCartStorage(): CartStorageModel {
    return {
        items: [],
        totalCartCost: 0,
    };
}
