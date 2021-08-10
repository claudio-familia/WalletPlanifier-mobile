import { Debt } from "./debt.model";
import { Income } from "./income.model";
import { User } from "./user.model";
import { Wallet } from "./wallet.model";

export class Transactions {
    id?:                number;
    userId:            number;
    walletId:          number;
    incomeId:          number | null;
    debtId:            number | null;
    originWalletValue: number;
    finalWalletValue:  number;
    description:       string;
    title:             string;
    isCompleted:       boolean;
    completedTime:     Date;
    income:            Income | null;
    debt:              Debt | null;
    wallet:            Wallet;
    user:              User;
}