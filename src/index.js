import { h, app } from 'hyperapp'
import { location } from '@hyperapp/router'
import MainView from './views/MainView'

const state = {
  location: location.state,
  isNavbarMenuActive: false,
  count: 0
}

const actions = {
  location: location.actions,
  toggleNavbarMenu: () => state => ({ isNavbarMenuActive: !state.isNavbarMenuActive }),
  increment: () => state => ({ count: state.count + 1 }),
  decrement: () => state => ({ count: state.count - 1 })
}

const main = app(state, actions, MainView, document.body)

const unsubscribe = location.subscribe(main.location)
