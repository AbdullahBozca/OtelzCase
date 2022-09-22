export class MainPage{
    
    
    navigate(){
        cy.visit('https://www.otelz.com/')
        
    }
    searchInput(){
        var first="İstanbul"
        var second="Adilcevaz"
        this.elements.cookieBtn().click()
        // const a=this.elements.locationSearch().text()
        this.elements.locationSearch().type(first).should("have.value",first)
        this.elements.locationSearch().clear().type(second).should("have.value",second)
        this.elements.locationSearchSelect().click()
        
    }
    calenderInput(){
        this.elements.calendarSelect().click()
        
    }
    searchBtn(){
        this.elements.searchBtn().click()
        
    }   

    elements = {
        cookieBtn: () => cy.get('[data-testid="cookieAccept"]') ,
        locationSearch:()=> cy.get('[data-testid="locationSearchBtn"]'),
        locationSearchSelect:() => cy.get('.sc-cd833911-1 > .active'),
        calendarSelect:() => cy.get('.sc-a26d6d0-0 > .type_0'),
        searchBtn:() => cy.get('#searchbar_1 > :nth-child(1) > .btn')        
     }
}
