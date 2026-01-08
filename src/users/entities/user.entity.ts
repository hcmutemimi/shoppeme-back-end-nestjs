import { UserRole } from "src/common/enums";

export class User {
    _id: string;
    name: string;
    email: string;
    role: UserRole;
    createdAt: Date;
}
