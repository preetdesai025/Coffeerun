(function (window) {
    'use strict';
    var App = window.App || {};

    function Payment(paymentID, db) {
        console.log("In Payment Constructor");
        this.paymentID = paymentID;
        this.db = db;
    }

    Payment.prototype.createReceipt = function (receipt) {
        console.log('Creating receipt for ' + receipt.emailAddress);
        this.db.add(receipt.emailAddress, receipt);
    };

    Payment.prototype.printReceipts = function () {
        var customerIdArray = Object.keys(this.db.getAll());

        console.log("Payment #" + this.paymentID + " has receipt");

        customerIdArray.forEach(function (id) {
            console.log(this.db.get(id));
        }.bind(this));
    }

    App.Payment = Payment;
    window.App = App;
})(window);