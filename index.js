
const{Builder,By,key,util,keys,until} = require("selenium-webdriver");



//var webdriver = require("selenium-webdriver");

var webdriver = require('selenium-webdriver')

//import { should } from 'chai';
const{should}= require('chai');
should();

describe('Selenium Demo Test Suite', function () {
  let driver;
  // time out for test execution
  this.timeout(60000);
  
  before(function () {
      // initializing chrome driver
         driver = new webdriver.Builder()
          .withCapabilities(webdriver.Capabilities.chrome())
          .build();

        //  driver = new Builder().forBrowser("chrome").build();
      // maximizing chrome browser
      driver.manage().window().maximize();
  });
  


  after(function () {
     // driver.quit();
  });
/*
  it('should fail to open google.com', function () {
    let Url = "http://www.bing.com";
    return driver.get(Url).then(() => {
        console.log(`Page "${Url}" opened`);
    }).then(() => {
        return driver.getCurrentUrl().then((currentUrl) => {
            currentUrl.should.include(
                `www.google.com`,
                `Expected url: www.google.com, Actual url: ${currentUrl}`);
        });
    });
});
*/
/*
it('should fail to search for nilay shah at bing.com', function () {
    let Url = "http://www.bing.com";
    return driver.get(Url).then(() => {
        console.log(`Page "${Url}" opened`);
    }).then(() => {
        return driver.getCurrentUrl().then((currentUrl) => {
            currentUrl.should.include(
                `www.bing.com`,
                `Expected url: www.google.com, Actual url: ${currentUrl}`);
        }).then(() => {
            return driver.wait(until.elementLocated(By.name("q")), 5000)
            .then(function(){
                driver.sleep(5000)
                .then(function(){
                            return driver.findElement(By.name("q")).sendKeys("dev");
                        })
            }).then(() => {
                return driver.wait(until.elementLocated(By.className("search")), 5000)
                .then(function(){
                    driver.sleep(5000)
                    .then(function(){
                                return driver.findElement(By.className("search")).click();
                            })
                })    

               
        });
    });
});
});


it('should search for nilay shah at bing.com', function () {
    let Url = `http://localhost:8080/?#`;
    return driver.get(Url).then(function () {
        console.log(`Page "${Url}" opened`);
    }).then(() => {
        return driver.getCurrentUrl().then((currentUrl) => {
            currentUrl.should.include(
                `http://localhost:8080/?#`,
                `Expected url: http://localhost:8080/?#, Actual url: ${currentUrl}`);
        }).then(() => {
            return driver.wait(until.elementLocated(By.id("empname1")), 5000)
            .then(function(){
                driver.sleep(5000)
                .then(function(){
                            return driver.findElement(By.id("empname")).sendKeys("arun");
                        })
            })
        });
    });
});
*/

  it('localhost open', function () {
      let Url = `http://localhost:8080/?#`;
      return driver.get(Url).then(function () {
          console.log(`Page "${Url}" opened`);
      }).then(() => {
          return driver.getCurrentUrl().then((currentUrl) => {
              currentUrl.should.include(
                  `http://localhost:8080/?#`,
                  `Expected url: http://localhost:8080/?#, Actual url: ${currentUrl}`);
          }).then(() => {
            return driver.wait(until.elementLocated(By.id("empname")), 5000)
            .then(function(){
                driver.sleep(5000)
                .then(function(){
                            return driver.findElement(By.id("empname")).sendKeys("arun");
                        })
            }).then(() => {
/*
                return driver.wait(until.elementLocated(By.id("empage")), 5000)
            .then(function(){
                driver.sleep(5000)
                .then(function(){
                            return driver.findElement(By.id("empage")).sendKeys("23");
                        })*/
                     
             let searchBox1 = driver.findElement(webdriver.By.id('empage'));
                //searchBox.sendKeys('23');
                return searchBox1.sendKeys('21').then(() => {
                    
                })
               
            .then(() => {
/*
                return driver.wait(until.elementLocated(By.id("empposition1")), 5000)
                .then(function(){
                    driver.sleep(5000)
                    .then(function(){
                                return driver.findElement(By.id("empposition")).sendKeys("dev");
                            })*/
                          
  
                let searchBox2 = driver.findElement(webdriver.By.id('empposition'));
                //searchBox.sendKeys('developer');
                return searchBox2.sendKeys('dev').then(() => {
                    
                }).then(() => {

                    return driver.wait(until.elementLocated(By.id("addbtn")), 5000)
            .then(function(){
                driver.sleep(5000)
                .then(function(){
                            return driver.findElement(By.id("addbtn")).click();
                        })
            });
               
          });
      });
  });
});
});
});

});
