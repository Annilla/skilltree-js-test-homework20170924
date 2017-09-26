var { defineSupportCode } = require('cucumber');
var chai = require('chai');
chai.should();

defineSupportCode(function ({ Given, When, Then }) {
    var url = "http://localhost:9000"
    Given('進入購物車頁面', async function () {
        await this.driver.goto(url)
            .viewport(1000, 600).wait('#num');
    });

    When('按 + 按鈕', async function () {
        await this.driver.click('#add').click('#add');
    });

    Then('數量顯示為 {string}', async function (string) {
        let num = await this.driver
                    .evaluate(() => document.querySelector('#num').innerText);
        console.log(num);
    });
})