module.exports = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();

    var newCompany = objLocator.findLocator(objRepo.companyPage.newCompany);
    var companyName = objLocator.findLocator(objRepo.companyPage.companyName);
    var companyEmail = objLocator.findLocator(objRepo.companyPage.companyEmail);
    var companyPhoneNumber = objLocator.findLocator(objRepo.companyPage.companyPhoneNumber);
    var companyAddress = objLocator.findLocator(objRepo.companyPage.companyAddress);
    var createCompany = objLocator.findLocator(objRepo.companyPage.createCompany);
    var updateCompany = objLocator.findLocator(objRepo.companyPage.updateCompany);

    this.companyPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };
    this.newCompany = function () {
        buttonActions.click(newCompany);
        return this;
    }
    this.enterCompanyName = function (value) {
        inputBoxActions.type(companyName, value);
        return this;
    };

    this.enterCompanyEmail = function (value) {
        inputBoxActions.type(companyEmail, value);
        return this;
    };
    this.enterCompanyPhoneNumber = function (value) {
        inputBoxActions.type(companyPhoneNumber, value);
        return this;
    };
    this.enterCompanyAddress = function (value) {
        inputBoxActions.type(companyAddress, value);
        return this;
    };
    this.createCompany = function () {
        buttonActions.click(createCompany);
        return this;
    };
    this.updateCompany = function () {
        browser.executeScript("arguments[0].click()", updateCompany);
        return this;
    };
};