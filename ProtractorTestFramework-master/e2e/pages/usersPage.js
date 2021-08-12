module.exports = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();

    var newUser = objLocator.findLocator(objRepo.usersPage.newUser);
    var usersFirstName = objLocator.findLocator(objRepo.usersPage.usersFirstName);
    var usersLastName = objLocator.findLocator(objRepo.usersPage.usersLastName);
    var usersEmail = objLocator.findLocator(objRepo.usersPage.usersEmail);
    var usersPhoneNumber = objLocator.findLocator(objRepo.usersPage.usersPhoneNumber);
    var usersAddress = objLocator.findLocator(objRepo.usersPage.usersAddress);
    var usersState = objLocator.findLocator(objRepo.usersPage.usersState);
    var usersZipCode = objLocator.findLocator(objRepo.usersPage.usersZipCode);
    var createUser = objLocator.findLocator(objRepo.usersPage.createUser);
    var editUser = objLocator.findLocator(objRepo.usersPage.editUser);
    var deleteUser = objLocator.findLocator(objRepo.usersPage.deleteUser);
    var updateUser = objLocator.findLocator(objRepo.usersPage.updateUser);

    this.usersPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };
    this.newUser = function () {
        buttonActions.click(newUser);
        return this;
    }
    this.enterFirstName = function (value) {
        inputBoxActions.type(usersFirstName, value);
        return this;
    };

    this.enterLastName = function (value) {
        inputBoxActions.type(usersLastName, value);
        return this;
    };
    this.enterEmail = function (value) {
        inputBoxActions.type(usersEmail, value);
        return this;
    };
    this.enterPhoneNumber = function (value) {
        inputBoxActions.type(usersPhoneNumber, value);
        return this;
    };
    this.enterAddress = function (value) {
        inputBoxActions.type(usersAddress, value);
        return this;
    };
    this.enterZipCode = function (value) {
        inputBoxActions.type(usersZipCode, value);
        return this;
    };
    this.createUser = function () {
        buttonActions.click(createUser);
        return this;
    };
    this.updateUser = function () {
        browser.executeScript("arguments[0].click()", updateUser);
        return this;
    };
    this.editUser = function () {
        buttonActions.click(editUser)
        return this;
    };
    this.deleteUser = function () {
        buttonActions.click(deleteUser);
        browser.switchTo().alert().accept();
        return this;
    };
    this.enterState = function (value) {
        var select = usersState;
        select.$('[value="'+value+'"]').click();
    }





};