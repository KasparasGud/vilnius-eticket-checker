"use strict";
var Browser = require("zombie");

exports.checkCard = checkCard

function checkCard(cardNumber) {
  return new Promise((resolve, reject) => {
    var browser = new Browser();
    try {
      browser.visit("https://mano.vilniustransport.lt/login", function() {
        browser.fill("input[name=number]", cardNumber);
        browser.document.forms[1].submit();
        browser.wait().then(function() {
          resolve(browser.html());
        });
      });
    } catch (error) {
      reject(error);
    }
  });
};
