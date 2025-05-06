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
        //  public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        //   }
        // public  getBalance() {
        //     return this._balance;
        //   }
        // };
        //using getter
        get balance() {
            return this._balance;
        }
        //using setter
        set deposit(amount) {
            this._balance = this.balance + amount;
        }
    }
    const poorAccount = new BankAccount(111, "Elon mask", 10);
    //   poorAccount.balance = 5; error
    // poorAccount.addDeposit(5);
    // poorAccount.getBalance();
    // const balance = poorAccount.getBalance();
    poorAccount.deposit = 100;
    const myBalance = poorAccount.balance;
    console.log(myBalance);
    //
}
