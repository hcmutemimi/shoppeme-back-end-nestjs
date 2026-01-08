import { ObjectId } from "mongoose";

export class Order {
    _id: ObjectId;
    productId: ObjectId;
    quantity: number;
    userId: ObjectId;
    createdAt: Date;
    
}
