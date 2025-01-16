const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load the local HTML file
  await page.goto(`C:/TheGreatOrganization/Work/PersonalPortfolioTemplates/purple-template/index.html`, { waitUntil: 'networkidle2' });

  // Set custom width and allow height to be dynamic based on content
  await page.pdf({
    path: 'output.pdf',
    width: '900px',  // Custom width
    height: '1350px',
    printBackground: true, // Ensure background styles are printed
  });

  await browser.close();
})();
