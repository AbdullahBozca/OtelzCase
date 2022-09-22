
import {MainPage} from "../pages/MainPage";
import { SearchPage } from "../pages/searchPage";
import { IlkResortPage } from "../pages/IlkResortPage";
const main_page=new MainPage()
const search_page=new SearchPage()
const ilkResort_Page=new IlkResortPage()

describe('empty spec', () => {

  
  var price=null
  it('passes', () => {
    
    main_page.navigate()
    main_page.searchInput()
    main_page.calenderInput()
    main_page.searchBtn()
    search_page.priceSave()
    search_page.reservationBtn()
    ilkResort_Page.firstReservationBtn()
    ilkResort_Page.odaSelectBox()   
    })
})