let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  // Set up a test below...
    test('amount due is based on an argument and cash tendered is 0', function(){
      let changehandler = new ChangeHandler(100)
      expect(changehandler.amountDue).toBe(100);
      expect(changehandler.cashTendered).toBe(0);      
    })
    test('Inserting quarter adds 25', function(){
      let changehandler = new ChangeHandler(25);
      changehandler.insertCoin('quarter');
      expect(changehandler.cashTendered).toBe(25);
    })
    test('Inserting dime adds 10', function(){
      let changehandler = new ChangeHandler(10);
      changehandler.insertCoin('dime');
      expect(changehandler.cashTendered).toBe(10);
    })
    test('Inserting nickel adds 5', function(){
      let changehandler = new ChangeHandler(5);
      changehandler.insertCoin('nickel');
      expect(changehandler.cashTendered).toBe(5);
    })
    test('Inserting penny adds 1', function(){
      let changehandler = new ChangeHandler(1);
      changehandler.insertCoin('penny');
      expect(changehandler.cashTendered).toBe(1);
    })
    test('Calling function multiple times', function(){
      let changehandler = new ChangeHandler(50);
      changehandler.insertCoin('penny')
      changehandler.insertCoin('penny')
      changehandler.insertCoin('nickel')
      expect(changehandler.cashTendered).toBe(7)
    })
    test('Cash tendered is more than amount due', function(){
      let changehandler = new ChangeHandler(25);
      changehandler.insertCoin('quarter');
      expect(changehandler.isPaymentSufficient()).toBe(true);
    })
    test('Cash tendered is less than amount due', function(){
      let changehandler = new ChangeHandler(25);
      changehandler.insertCoin('dime');
      expect(changehandler.isPaymentSufficient()).toBe(false);
    })
    test('Cash tendered is equal to amount due', function(){
      let changehandler = new ChangeHandler(25);
      changehandler.insertCoin('quarter');
      expect(changehandler.isPaymentSufficient()).toBe(true);
    })
    test('32 change produces 1 quarter, 0 dimes, 1 nickel, 2 pennies', function(){
      let changehandler = new ChangeHandler(60);
      changehandler.cashTendered = 92
      expect(changehandler.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
    })
    test('10 change produces 0 quarter, 1 dimes, 0 nickel, 0 pennies', function(){
      let changehandler = new ChangeHandler(75);
      changehandler.cashTendered = 85
      expect(changehandler.giveChange()).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
    })
    test('27 change produces 1 quarter, 0 dimes, 0 nickel, 2 pennies', function(){
      let changehandler = new ChangeHandler(40);
      changehandler.cashTendered = 67
      expect(changehandler.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
    })
    test('68 change produces 2 quarter, 1 dimes, 1 nickel, 3 pennies', function(){
      let changehandler = new ChangeHandler(60);
      changehandler.cashTendered = 128
      expect(changehandler.giveChange()).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
    })
  
});
