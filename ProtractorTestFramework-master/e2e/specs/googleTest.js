describe('Login Logout Test cases execution ', function () {

    'use strict';

    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();

    it('Login-Logout', function () {
        loginPage.loginPage(testData.search.baseUrl);
        loginPage.enterEmail(testData.keywords.userName);
        loginPage.enterUserPassword(testData.keywords.passWord);
        loginPage.clickLogin();
        dashBoardPage.logout();
    });
});
