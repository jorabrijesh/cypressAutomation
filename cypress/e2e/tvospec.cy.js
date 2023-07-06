
import homepage  from "../pages/tvoHomePage";

describe('TVO application', () => {

it('Homepage checks',()=>{
  cy.visit('https://tvolearn.com/');
  // Creating object 
  const homepageObj = new homepage();
  homepageObj.pageElements.homepageHeader();

  homepageObj.clickElementaryDropdown();
  homepageObj.clickDropdownValue();

  homepageObj.checkHeaderOnElementaryGradePage();

  cy.scrollTo(0, 350);
  homepageObj.clickCard();
  // Header validation on Cards page 
  homepageObj.headerCheckOnCardPage();

})

})