const { Given, When, Then } = require('cucumber');
const { cons } = require('fp-ts/lib/ReadonlyArray');
const { Selector } = require('testcafe');



//arrow fn
Given("I am on PRODUCT STORE page",async()=>{
  await testController.navigateTo("https://www.demoblaze.com/");
});

When("I click categories link",async()=>{
  const link=Selector("#cat");
  await testController.click(link);
});

Then("I see {string}, {string} and {string} under categories",async(s1,s2,s3)=>{
  const t1 = Selector('a').withExactText("Phones").with({boundTestRun:testController})
  const t2 = Selector('a').withExactText("Laptops").with({boundTestRun:testController})
  const t3 = Selector('a').withExactText("Monitors").with({boundTestRun:testController})

await testController
.expect(t1.innerText).contains(s1)
.expect(t2.innerText).contains(s2)
.expect(t3.innerText).contains(s3)
})

