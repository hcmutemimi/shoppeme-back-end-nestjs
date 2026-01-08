import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { UserRole } from "src/common/enums/user.enum";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class User extends Document {
    @Prop({ required: true })
    name: string;
    @Prop({ unique: true, required: true })
    email: string;
    @Prop({ required: true, enum: UserRole })
    role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);