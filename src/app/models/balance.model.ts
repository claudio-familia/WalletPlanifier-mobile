import { Debts } from "./debts.model";
import { Incomes } from "./incomes.model";

export class Balance {
    availableMoney: number;
    spentMoney: number;
    debtTotal: number;
    debts: Debts;
    incomes: Incomes;

    constructor() {
        this.availableMoney = 0;
        this.spentMoney = 0;
        this.debtTotal = 0;
        this.debts = new Debts();
        this.incomes = new Incomes();
    }
}