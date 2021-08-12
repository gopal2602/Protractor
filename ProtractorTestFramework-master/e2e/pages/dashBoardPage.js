module.exports = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var users = objLocator.findLocator(objRepo.dashBoardPage.dashboardUsers);
    var companies = objLocator.findLocator(objRepo.dashBoardPage.dashboardCompanies);
    var projects = objLocator.findLocator(objRepo.dashBoardPage.dashBoardProjects);
    var logOut = objLocator.findLocator(objRepo.dashBoardPage.dashBoardLogout);


    this.dashBoardPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };
    this.clickUsers = function () {
        buttonActions.click(users);
        return this;
    };
    this.clickCompanies = function () {
        buttonActions.click(companies);
        return this;
    };
    this.clickProjects = function () {
        buttonActions.click(projects);
        return this;
    };
    this.logout = function () {
        buttonActions.click(logOut);
        return this;
    };





};