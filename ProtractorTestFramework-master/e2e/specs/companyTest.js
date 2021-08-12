describe('Company Module Test Cases execution', function () {

    'use strict';

    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();
    var usersPage  = new pages.usersPage();
    var companyPage =  new pages.companyPage();

    it('Company-Testcases', function () {
        loginPage.loginPage(testData.search.baseUrl);
        loginPage.enterEmail(testData.keywords.userName);
        loginPage.enterUserPassword(testData.keywords.passWord);
        loginPage.clickLogin();
        dashBoardPage.clickCompanies();
        companyPage.newCompany();
        companyPage.enterCompanyName(testData.users.firstName);
        companyPage.enterCompanyEmail(testData.users.email);
        companyPage.enterCompanyPhoneNumber(testData.users.phoneNumber);
        companyPage.enterCompanyAddress(testData.users.Address);
        companyPage.createCompany();
        dashBoardPage.clickCompanies();
        usersPage.editUser();
        companyPage.enterCompanyPhoneNumber("0987654321");
        browser.sleep(2000);
        companyPage.updateCompany();
        dashBoardPage.clickCompanies();
        usersPage.deleteUser();
        dashBoardPage.logout();
    });
});
