const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables

describe('E2E tests', function() {
    this.timeout(10000);
  before(async () => { browser = await chromium.launch({ headless: false, slowMo: 5000 }); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); }); 

  it('loads static page', async function() {
    await page.goto('http://google.bg/');
    await page.screenshot({ path: `index.png` });
    expect(1).to.equal(1);
    await browser.close();
  });
  
});
