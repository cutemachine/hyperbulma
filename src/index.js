import { h, app } from "hyperapp"

const state = {
}

const actions = {
}

const view = (state, actions) => (
  <h1><i class='fa fa-github' /> HyperBulma</h1>
)

const main = app(state, actions, view, document.body)
