import { h, app } from "hyperapp"
import { Link } from "@hyperapp/router"

export default () => (
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href='/'>
        <strong>HYPERBULMA</strong>
      </a>
    </div>
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <Link class="navbar-item" to="/components">Components</Link>
        <Link class="navbar-item" to="/app">App</Link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary" href="https://github.com/cutemachine/hyperbulma">
                <i class='fa fa-github' />&nbsp;Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
