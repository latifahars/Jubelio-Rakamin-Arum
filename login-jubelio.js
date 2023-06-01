const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
async function login() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get('https://app.jubelio.com/login');

     let emailInput = await driver.findElement(By.name('email'));
     await emailInput.clear();
     await emailInput.sendKeys('qa.rakamin.jubelio@gmail.com');

     let passwordInput = await driver.findElement(By.name('password'));
     await passwordInput.clear();
     await passwordInput.sendKeys('Jubelio123!', Key.RETURN);

     await driver.wait(until.urlContains('/home'), 5000);
    
     let currentUrl = await driver.getCurrentUrl();
     if (currentUrl.includes('/home')) {
       console.log('Login berhasil!');
     } else {
       console.log('Login gagal.');
     }
  } 
  finally {
    await driver.quit();
    }
}
login();