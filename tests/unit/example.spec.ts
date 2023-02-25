import { mount } from '@vue/test-utils'
import LocationPage from '@/views/LocationPage.vue'

describe('LocationPage.vue', () => {
  it('renders location page', () => {
    const wrapper = mount(LocationPage)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
