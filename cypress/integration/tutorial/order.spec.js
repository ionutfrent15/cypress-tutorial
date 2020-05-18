
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

import {titleInclude, validLoginTest, visitLoginPage} from "./login.spec";

const clickDresses = () => {
    cy.get('.submenu-container.clearfix.first-in-line-xs')
        .contains('Summer Dresses')
        .click({ force: true });

    cy.get('.cat-name')
        .contains('Summer Dresses');
};

const clickPrintedSummerDress = () => {
    clickDresses();

    cy.get('.product_list.grid.row')
        .contains('Printed Summer Dress')
        .click();

    titleInclude('Printed Summer Dress - My Store')
};

const enterQuantity = () => {
   cy.get('#quantity_wanted')
       .clear()
       .type('2');

   cy.get('#quantity_wanted')
       .invoke('val')
       .then(value => {
           cy.log(value);
           expect(value)
               .to
               .eql('2');
       });
};

const selectSize = () => {
   cy.get('#group_1')
       .select('M');

   cy.get('#group_1')
       .contains('M');
};

const addToCart = () => {
    clickPrintedSummerDress();
    enterQuantity();
    selectSize();

    cy.get('button[name="Submit"]')
       .click();
};

const checkout = () => {
    addToCart();

    cy.contains('Proceed to checkout')
        .click();

    cy.get('.button.btn.btn-default.standard-checkout.button-medium')
        .click();

    cy.get('button[name="processAddress"]')
        .click();

    cy.get('input[name="cgv"]')
        .click();

    cy.get('button[name="processCarrier"]')
        .click();

    cy.get(".cheque")
        .click();

    cy.contains('span', 'I confirm my order')
        .click();

    cy.get('.alert.alert-success')
        .should('exist');

};

context('Order', () => {
    beforeEach(() => {
        visitLoginPage();
        validLoginTest();
    });

    it('checkout', () => {
        checkout();
    })
});
