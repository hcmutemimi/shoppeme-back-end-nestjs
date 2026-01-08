import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ _id: false })
export class PromotionPeriodSchema {
    @Prop({ required: true })
    start: Date;
    @Prop({ required: true })
    end: Date;
}