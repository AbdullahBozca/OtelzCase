export class SearchPage{
    priceSave(){        
    }
    reservationBtn(){
        this.elements.reservation().click()
    }
    elements = {
        price:() => cy.get('[data-testid="otel-1"] > :nth-child(1) > .right-col > .price'),
        reservation:() => cy.get('[data-testid="otel-1"] > :nth-child(1) > .right-col > .btn')
    }
}