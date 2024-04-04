class Account {
    constructor(Acc_no = 1, Balance = 0) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount() { }
    creditAmount() { }
    getBalance() { }
}
class Current_Account extends Account {
    constructor(Acc_no = 1, Balance = 0, Interest_rate = 0.5) {
        super(Acc_no, Balance);
        this.Interest_rate = Interest_rate;
    }
    addCustomer() { }
    removeCustomer() { }
}
class Saving_Account extends Account {
    constructor(Acc_no = 1, Balance = 0, Min_balance = 500) {
        super(Acc_no, Balance);
        this.Min_balance = Min_balance;
    }
    addCustomer() { }
    removeCustomer() { }
}
