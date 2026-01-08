import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PromotionPeriodSchema } from "./promotion-period.schemas";
import { Types } from "mongoose";

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    originalPrice: number;
    @Prop({ required: true })
    salePrice: number;
    @Prop()
    subCategory: string;
    @Prop()
    description: string;
    @Prop()
    images: string[];
    @Prop({ default: true })
    isActive: boolean;
    @Prop({ default: 0 })
    stock: number;
    @Prop()
    brand: string;
    @Prop({ type: PromotionPeriodSchema })  
    promotionPeriod: PromotionPeriodSchema;
    @Prop()
    tags: string[];
    @Prop({ type: Types.ObjectId, ref: 'Category'})
    category: Types.ObjectId;

}
export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index({ name: 'text', description: 'text' });