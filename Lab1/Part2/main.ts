interface IAccount {
  Date_of_opening: Date;
  addCustomer();
  removeCustomer();
}

class Account {
  constructor(public Acc_no = 1, public Balance = 0) {}
  debitAmount() {}
  creditAmount() {}
  getBalance() {}
}

class Current_Account extends Account implements IAccount {
  constructor(Acc_no = 1, Balance = 0, public Interest_rate = 0.5) {
    super(Acc_no, Balance);
  }
  Date_of_opening: Date;
  addCustomer() {}

  removeCustomer() {}
}

class Saving_Account extends Account implements IAccount {
  constructor(Acc_no = 1, Balance = 0, public Min_balance = 500) {
    super(Acc_no, Balance);
  }
  Date_of_opening: Date;
  addCustomer() {}
  removeCustomer() {}
}
