describe('First Otomation Cypress Testing', () => {
  it('passes', () => {
    //url
    cy.visit('https://tv.idlixprime.com/')
    
    //button click close
    cy.get('.swal-button-container').click()

    //search    
    cy.get('#searchformpage').type('Avengers').submit()
    
     //button click close
     cy.get('.swal-button-container').click()
    
     //klik film
     cy.contains('Avengers: Endgame (2019)').click()

    //button click close
     cy.get('.swal-button-container').click()

     cy.scrollTo(0, 500)

     //klik film
     cy.contains('Watch trailer').click()
     
  })
})
