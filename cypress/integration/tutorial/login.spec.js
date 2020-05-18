
/*
 * Testing Knowledge
 * Tutorial de testare unitara in JavaScript
 * Verificarea si Validarea Sistemelor Soft - 19.05.2020
 * Autori:
 * Frent Alexandru-Ionut
 * Ginga Tudor-Adrian
 * Serban Dragos-Cornel
 * Tamas Adrian-Daniel
 * Thira Iulia-Denisa
 */

context('Login', () => {
    beforeEach(() => {
        visitLoginPage();
    });

    it('valid login test', () => {
        validLoginTest();
    });

    it('invalid login test', () => {
        invalidLoginTest();
    })
});

export const visitLoginPage = () => {
    cy.visit('http://automationpractice.com');
    cy.get('.login').click();
};

export const validLoginTest = () => {
    cy.fixture('user')
        .then(user => {
            login(user);
            titleInclude('My account - My Store')
        });
};

const login = (user) => {
    cy.log(user);
    cy.get('#email')
        .type(user.email);
    cy.get('#passwd')
        .type(user.password);
    cy.get('#SubmitLogin > span')
        .click();
};

export const titleInclude = (title) => {
    cy.title()
        .should('include', title);
};

const invalidLoginTest = () => {
    const user = { email: 'invalidemail', password: 'invalidpassword' };
    login(user);
    cy.get('.alert.alert-danger')
        .should('exist');
};
