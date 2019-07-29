import Vue from 'vue'
import Home from '@/components/Home'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.home h1').textContent)
      .toEqual('Motivational Tool Home')
  })
})
