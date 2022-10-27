import Login from './pageObject/login';
import HomePage from './pageObject/homepage';

describe('Home page', () => {

    const loginPage = new Login();
    const homePage = new HomePage();
    
    beforeEach(() => {
        let data;
        cy.fixture('creds').then(function (data) {
            this.data = data;
            loginPage.navigate();
            loginPage.fillEmail(this.data.user);
            loginPage.fillPassword(this.data.password);
            loginPage.clickSubmit();
        })
    })

    it('User is able to add Sauce Labs Backpack to the cart', () => {
        homePage.addSauceLabsBackpacktoCart();
        homePage.clickShoppingCart();
        
        homePage.getFirstShoppingCartItem().should('have.text', "Sauce Labs Backpack");
    });

})
