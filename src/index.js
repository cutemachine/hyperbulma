import { h, app } from "hyperapp"
import { location } from "@hyperapp/router"
import MainView from './views/MainView'

const state = {
  location: location.state
}

const actions = {
  location: location.actions
}

const main = app(state, actions, MainView, document.body)

const unsubscribe = location.subscribe(main.location)
