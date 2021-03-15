(function (window) {
    'use strict';
    var FORM_SELECTOR = '[payment-form="form"]';

    function showInput() {
        document.getElementById('displayName').innerHTML = document.getElementById("name").value;
    }
    var modal = $('.modal');
    $('.close').click(function () {
        modal.hide();
    })
    var App = window.App;
    var Payment = App.Payment;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myPayment = new Payment('ncc-1701', new DataStore());
    window.myPayment = myPayment;
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function (data) {
        myPayment.createReceipt.call(myPayment, data);
        showInput();
        modal.show();
    });
    console.log(formHandler);
})(window);