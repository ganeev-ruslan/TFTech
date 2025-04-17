
const rootSelector = '[data-js-tabs]'

// для основной логики всех табов
class Tabs {
    selectors = {
       root: rootSelector,
       button: '[data-js-tabs-button]',
       content: '[data-js-tabs-content]'
    }

    stateClasses = {
        isActive: 'is-active',
    }

    stateAtributes = {
        ariaSelected: 'aria-selected', 
        tabIndex: 'tabindex', 
        
    }
}

// для иницилизация всех табов на странице
class TabsCollection {
    constructor(){
        this.init()
    }

    init(){
        document.querySelectorAll(rootSelector).forEach((element)=>{
            new Tabs(element)
        })
    }
}




export default TabsCollection