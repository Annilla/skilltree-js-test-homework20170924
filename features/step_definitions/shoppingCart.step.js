var { defineSupportCode } = require('cucumber');
var chai = require('chai');
chai.should();

defineSupportCode(function ({ Given, When, Then }) {
    var url = "http://localhost:9000"

    Given('進入購物車頁面', async function () {
        await this.driver.goto(url)
            .viewport(1000, 600).wait('main');
    });

    Given('購買如下商品', async function (table) {
        this.items = table.hashes();

        for (let i = 0; i < this.items.length; i++) {
            for (let j = 0; j < this.items[i].qty; j++) {
                await this.driver.click(`#addBtn${i+1}`);
            }
        }
    });
    
    When('選擇完畢，計算價格', async function () {
        var price = await this.driver
            .evaluate(() => document.querySelector('#total').innerText);

        this.actual = +price;
    });

    Then('總金額顯示為 {string}', function (expected) {
        this.actual.should.equal(+expected);
    });
})