{
  //Access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number; kothao paoya jabe na
    protected _balance: number; //child e paoya jay. ex: studentAccount

    constructor(id: number, name: string, balance: number) {
      this.name = name;
      this.id = id;
      this._balance = balance;
    }

    //private er karon e ekhane modifiy korte hobe class er moddhe
   public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

  public  getBalance() {
      return this._balance;
    }
  };

  //alada exapmle

  class StudentAccount extends BankAccount{
  test(){
    this.
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
