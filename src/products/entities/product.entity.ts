export class Product {
    _id: string;
    name: string;
    originalPrice: number
    salePrice: number;
    category: string
    description: string;
    images: string[];
    isActive: boolean;
    stock: number;
    brand: string;
    promotionPeriod: PromotionPeriod;
    tags: string[]; 
    
}

export interface PromotionPeriod {
    start: Date;
    end: Date;
}
