import { Frecuency } from "./frecuency.model";
import { Transactions } from "./transaction.model";

export class Income {
    id?:          number;
    userId:      number;
    frecuencyId: number;
    description: string;
    amount:      number;
    frecuency?: Frecuency;
    transactions?: Transactions[];
}