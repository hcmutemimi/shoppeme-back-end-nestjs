import { UserRole } from "src/common/enums";

export class CreateUserDto {
    name: string;
    email: string;
    role: UserRole;
}
