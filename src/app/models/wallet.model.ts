import { User } from "./user.model";

export class Wallet {
    id?:          number;
    userId:      number;
    description: string;
    total:       number;
    user?:        User;
}