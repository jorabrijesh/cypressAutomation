class homepage{
    pageElements={
        homepageHeader:() => cy.get('div[class="shogun-heading-component"] h1'),
        elementaryDropdown:()=> cy.get('div[class="grid grid--no-gutters grid--table site-header__mobile-nav"] li:nth-child(1) button:nth-child(1) span:nth-child(1)'),
        elementaryValue:() => cy.get('li[class="site-nav--has-dropdown site-nav--active-dropdown"] li:nth-child(2) a:nth-child(1) span:nth-child(1)'),
        learnForwardSection:()=> cy.get('div[class="shogun-heading-component"] h1'),
        selectCards:() => cy.get('a[id="s-f9924085-cdf6-409f-b476-67d7c5a74702"]'),
        headerOnCardsPage:() => cy.get('div[id="s-e235c8ce-c10f-42b3-b324-32da5f7e97f5"] h2')
    }

    checkHeaderText(){
        //Header text check
        this.pageElements.homepageHeader().contains('Learning Resources You Can Count  On');
    }

    clickElementaryDropdown(){
        //Assertion for Elementary dropdown
        this.pageElements.elementaryDropdown().should('be.visible').and('contain','Elementary (K - 8)');
        this.pageElements.elementaryDropdown().click();
    }

    clickDropdownValue(){
        // Check Grade selection proper or not
        this.pageElements.elementaryValue().should('have.text','Grade 1');
        this.pageElements.elementaryValue().click();
    }

    checkHeaderOnElementaryGradePage(){
        // Header check
        this.pageElements.learnForwardSection().should('be.visible').and('contain','Focus on Grade 1');
    }

    clickCard(){
        this.pageElements.selectCards().should('be.visible');
        this.pageElements.selectCards().click();
    }

    headerCheckOnCardPage(){
        this.pageElements.headerOnCardsPage().should('be.visible').contains('Mathematics');
    }


    
}
export default homepage;