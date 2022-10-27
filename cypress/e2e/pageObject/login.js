class Login{
    navigate(){
        cy.visit('https://www.saucedemo.com/');
    }

    fillEmail(email){
        cy.get('[data-test="username"]')
            .clear()
            .type(email)
        return this
    }

    fillPassword(pwd){
        cy.get('[data-test="password"]')
            .clear()
            .type(pwd)
        return this
    }

    clickSubmit(){
        cy.get('[data-test="login-button"]')
            .click()
        return this
    }
}

export default Login
