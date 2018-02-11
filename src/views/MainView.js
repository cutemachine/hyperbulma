import { h, app } from "hyperapp"
import { Route } from "@hyperapp/router"
import Navbar from '../components/Navbar'
import HomeView from './HomeView'
import ComponentsView from './ComponentsView'
import AppView from './AppView'

export default (state, actions) => (
  <div>
    <Navbar />
    <Route path="/" render={HomeView} />
    <Route path="/components" render={ComponentsView} />
    <Route path="/app" render={AppView} />
  </div>
)
