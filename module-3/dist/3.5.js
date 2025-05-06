"use strict";
{
    //Access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.name = name;
            this.id = id;
            this._balance = balance;
        }
        //private er karon e ekhane modifiy korte hobe class er moddhe
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    ;
    //alada exapmle
    class StudentAccount extends BankAccount {
        test() {
            this.
            ;
        }
    }
    const poorAccount = new BankAccount(111, "Elon mask", 10);
    //   poorAccount.balance = 5; error
    poorAccount.addDeposit(5);
    // poorAccount.getBalance();
    const balance = poorAccount.getBalance();
    console.log({ balance });
    //
}
