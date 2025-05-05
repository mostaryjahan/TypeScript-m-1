{
  //Access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      this.name = name;
      this.id = id;
      this.balance = balance;
    }

    //private er karon e ekhane modifiy korte hobe class er moddhe
    addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }

    getBalance() {
      return this.balance;
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
