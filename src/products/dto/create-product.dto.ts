import { PromotionPeriod } from "../entities/product.entity";

export class CreateProductDto {
    name: string;
    originalPrice: number
    salePrice: number
    category: string
    description: string;
    images: string[];
    isActive: boolean;
    stock: number;
    brand: string;
    promotionPeriod: PromotionPeriod;
    tags: string[];
}
