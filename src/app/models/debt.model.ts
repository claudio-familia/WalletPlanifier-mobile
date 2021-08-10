export class Debt {
    id?:          number;
    userId:      number;
    frecuencyId: number;
    description: string;
    amount:      number;
    isFixed:     boolean;
    endDate?:     Date;
}