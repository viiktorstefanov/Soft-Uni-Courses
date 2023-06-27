const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables

describe('E2E tests', function() {
  before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); }); 

  it('Testing: load titles', async function() {
    await page.goto('http://localhost:5500');
    let content = await page.locator('div.head span').allTextContents();
    expect(content).to.contain('Scalable Vector Graphics', 'Open standard', 'Unix', 'ALGOL');
  });
  it('Testing: button functionality', async function() {
    await page.goto('http://localhost:5500');
    await page.getByText('More').first().click();
    let visible = await page.isVisible('div.extra');
    expect(visible).to.be.true;

    content = await page.locator('div.extra p').first().textContent();
    expect(content.length).to.be.greaterThan(0);

    expect(await page.getByText('Less').first().textContent()).to.contain('Less');

    await page.getByText('Less').first().click();
    visible = await page.isVisible('div.extra');
    expect(visible).to.be.false;
    expect(await page.getByText('More').first().textContent()).to.contain('More');
  });
  
});