import { h, app } from "hyperapp"
import Navbar from './components/Navbar'

const state = {
}

const actions = {
}

const view = (state, actions) => (
  <div>
    <Navbar />
    <h1><i class='fa fa-github' /> HyperBulma</h1>
  </div>
)

const main = app(state, actions, view, document.body)
