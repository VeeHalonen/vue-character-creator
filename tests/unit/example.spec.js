import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'


describe('Home.vue', () => {
  it('renders... something??', () => {
    const msg = ''
    const wrapper = shallowMount(Home, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


