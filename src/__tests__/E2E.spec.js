import puppeteer from "puppeteer";

describe("E2E Tests", () => {
  const app = "http://localhost:3000/";
  let browser;
  let page;
  let hexNumber;

  it("should correctly convert the inputs to a HEX number when the convert button is clicked", async () => {
    //Open browser and open app in new page
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(app);

    //Input values for all 3 color fields
    await page.click("input[name='Red']");
    await page.type("input[name='Red']", "100");
    await page.click("input[name='Green']");
    await page.type("input[name='Green']", "220");
    await page.click("input[name='Blue']");
    await page.type("input[name='Blue']", "75");

    //Click on the convert button
    await page.click("button[name='Convert']");

    //Check the correct HEX value is displayed to the user
    hexNumber = await page.$eval(
      "input[name='display-color']",
      (el) => el.value
    );
    expect(hexNumber).toBe("#64dc4b");

    await browser.close();
  });

  it("should clear all values from the input fields as well as the HEX color display, when the reset button is clicked", async () => {
    //Open browser and open app in new page
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(app);

    //Input values for all 3 color fields
    await page.click("input[name='Red']");
    await page.type("input[name='Red']", "210");
    await page.click("input[name='Green']");
    await page.type("input[name='Green']", "45");
    await page.click("input[name='Blue']");
    await page.type("input[name='Blue']", "138");

    //Click on the convert button
    await page.click("button[name='Convert']");

    //Check the correct HEX value is displayed to the user
    hexNumber = await page.$eval(
      "input[name='display-color']",
      (el) => el.value
    );
    expect(hexNumber).toBe("#d22d8a");

    //Click on the reset button
    await page.click("button[name='Reset']");

    //Check that the red value is reset
    const redValue = await page.$eval(
      "input[name='Red']",
      (el) => el.textContent
    );
    expect(redValue).toBe("");

    //Check that the green value is reset
    const greenValue = await page.$eval(
      "input[name='Green']",
      (el) => el.textContent
    );
    expect(greenValue).toBe("");

    //Check that the blue value is reset
    const blueValue = await page.$eval(
      "input[name='Blue']",
      (el) => el.textContent
    );
    expect(blueValue).toBe("");

    //Check that the hex value is reset
    hexNumber = await page.$eval(
      "input[name='display-color']",
      (el) => el.value
    );
    expect(hexNumber).toBe("#000000");

    await browser.close();
  });

  it("should not convert to a HEX number if one of the color input fields is empty", async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(app);

    //Input value for 1 color field
    await page.click("input[name='Red']");
    await page.type("input[name='Red']", "74");

    //Click on the convert button
    await page.click("button[name='Convert']");

    //Check that defauly HEX value is still displayed
    hexNumber = await page.$eval(
      "input[name='display-color']",
      (el) => el.value
    );
    expect(hexNumber).toBe("#000000");

    await browser.close();
  });

  it("should not convert to a HEX number if a number outside the expected range is entered into one of the color input fields", async () => {
    //Open browser and open app in new page
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(app);

    //Input values for all 3 color fields, where one value is invalid
    await page.click("input[name='Red']");
    await page.type("input[name='Red']", "46");
    await page.click("input[name='Green']");
    await page.type("input[name='Green']", "112");
    await page.click("input[name='Blue']");
    await page.type("input[name='Blue']", "312");

    //Click on the convert button
    await page.click("button[name='Convert']");

    //Check that defauly HEX value is still displayed
    hexNumber = await page.$eval(
      "input[name='display-color']",
      (el) => el.value
    );
    expect(hexNumber).toBe("#000000");

    await browser.close();
  });
});
