describe('Users Module test cases execution', function () {

    'use strict';''

    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();
    var usersPage  = new pages.usersPage();

    it('Users-TestCases', function () {
        loginPage.loginPage(testData.search.baseUrl);
        loginPage.enterEmail(testData.keywords.userName);
        loginPage.enterUserPassword(testData.keywords.passWord);
        loginPage.clickLogin();
        dashBoardPage.clickUsers();
        usersPage.newUser();
        usersPage.enterFirstName(testData.users.firstName);
        usersPage.enterLastName(testData.users.lastName);
        usersPage.enterEmail(testData.users.email);
        usersPage.enterPhoneNumber(testData.users.phoneNumber);
        usersPage.enterAddress(testData.users.Address);
        usersPage.enterState(testData.users.State);
        usersPage.enterZipCode(testData.users.zipCode);
        usersPage.createUser();
        dashBoardPage.clickUsers();
        usersPage.editUser();
        usersPage.enterPhoneNumber("0987654321");
        browser.sleep(2000);
        usersPage.updateUser();
        dashBoardPage.clickUsers();
        usersPage.deleteUser();
        dashBoardPage.logout();
    });
});
