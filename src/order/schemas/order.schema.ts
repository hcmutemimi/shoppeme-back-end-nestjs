import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
  timestamps: true, // auto creates createdAt & updatedAt
})
export class Order extends Document {
  @Prop({
    type: Types.ObjectId,
    ref: 'Product',
    required: true,
  })
  productId: Types.ObjectId;

  @Prop({
    type: Number,
    required: true,
    min: 1,
  })
  quantity: number;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  userId: Types.ObjectId;

  // OPTIONAL:
  // If you use timestamps: true → you do NOT need this
  // @Prop({ type: Date })
  // createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
