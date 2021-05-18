import { shallowMount, createLocalVue  } from '@vue/test-utils'
import AllData from '../AllData'
import Vuex from 'vuex'
import { INITIAL_STORE_STATE } from "../../helpers"

const localVue = createLocalVue()

localVue.use(Vuex)


describe('AllData.vue', function() {

    let store

    beforeEach(() => {
        store = new Vuex.Store(INITIAL_STORE_STATE)
      })

    const races = [{name: 'human'}, {name: 'not human' }]
    const spells = [{name: 'frostbolt'}, {name: 'fireball' }]
    
    it("Click on Refetch button triggers emit 'refetch'", async function(){
        const wrapper = shallowMount(AllData, { store, localVue, propsData: {
            races, spells
        } })

        await wrapper.find('v-btn').trigger('click')
        
        expect(wrapper.emitted().refetch.length).toBe(1)



    })

})