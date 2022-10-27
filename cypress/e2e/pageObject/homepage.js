class HomePage{

    addSauceLabsBackpacktoCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click()
        return this
    }

    clickShoppingCart(){
        cy.get('.shopping_cart_link')
            .click()
        return this
    }

    getFirstShoppingCartItem(){
        return cy.get('.inventory_item_name')
    }
}

export default HomePage
