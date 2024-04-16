export interface Product {
    id: string;
    description: string;
    barCode: string;
    salePrice: number;
    stockQuantity: number;
    manufacturingDate: string;
    expirationDate: string;
    measure: {
        unityMeasurement: number;
        quantity: number;
    };
    categoryId: string;
    locationId: string;
    supplierId: string;
}
