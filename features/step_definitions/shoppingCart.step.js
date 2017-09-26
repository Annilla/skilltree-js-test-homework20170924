var { defineSupportCode } = require('cucumber');
var chai = require('chai');
chai.should();

defineSupportCode(function ({ Given, When, Then }) {
    var url = "http://localhost:9000"
    Given('進入購物車頁面', async function () {
        await this.driver.goto(url)
            .viewport(1000, 600);
    });

    When('按 + 按鈕', function () {
        // Write code here that turns the phrase above into concrete actions
    });

    Then('數量顯示為 {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        console.log(string);
    });

    // When('按 + 按鈕', async function () {
    //     var price = await this.driver
    //         .evaluate(() => document.querySelector('#price').innerText);

    //     this.actual = +price;
    // });


    // Then('折扣後價格為 {string} 元', function (expected) {
    //     this.actual.should.equal(+expected);
    // });
})

// var { client } = require('nightwatch-cucumber')
// var { defineSupportCode } = require('cucumber')

// defineSupportCode(({ Given, Then, When }) => {
//     var url = "http://localhost:9000"
//     Given('進入購物車頁面', function () {
//         return client
//             .url(url)
//             .waitForElementVisible('#num', 1000)
//     });

//     When('按 + 按鈕', function () {
//         // Write code here that turns the phrase above into concrete actions
//     });

//     Then('數量顯示為 {string}', function (string) {
//         // Write code here that turns the phrase above into concrete actions
//         console.log(string);
//     });
// })