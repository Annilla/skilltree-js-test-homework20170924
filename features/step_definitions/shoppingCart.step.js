var { client } = require('nightwatch-cucumber')
var { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {
    var url = "http://localhost:9000"
    Given('進入購物車頁面', function () {
        return client
            .url(url)
            .waitForElementVisible('#num', 1000)
    });

    When('按 + 按鈕', function () {
        // Write code here that turns the phrase above into concrete actions
    });

    Then('數量顯示為 {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        console.log(string);
    });
})