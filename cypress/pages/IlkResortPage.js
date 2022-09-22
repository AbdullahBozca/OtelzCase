export class IlkResortPage{

    firstReservationBtn(){
        this.elements.ilkReservation().click()
    }
    odaSelectBox(){
        this.elements.odaSelectBox().select('1').should("have.value",'1')
    }
    sonReservation(){
        this.elements.sonReservation().click()
        this.elements.sonReservation().click()
    }

    elements = {
        ilkReservation:()=>cy.xpath('//button[@class="btn btn-primary desktop"]'),
        odaSelectBox:() => cy.xpath('(//select[@class="roomSelectBox"])[1]'),
        sonReservation:()=>cy.get('#totalPrice > .btn')
    }
}