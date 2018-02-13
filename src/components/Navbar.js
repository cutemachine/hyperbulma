import { h, app } from 'hyperapp'
import { Link } from '@hyperapp/router'

export default ({ isNavbarMenuActive, toggleNavbarMenu }) => (
  <nav class='navbar is-transparent'>
    <div class='navbar-brand'>
      <a class='navbar-item' href='/'>
        <strong>HYPERBULMA</strong>
      </a>
      <div class="navbar-burger burger" onclick={toggleNavbarMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class={`navbar-menu ${isNavbarMenuActive ? 'is-active' : ''}`}>
      <div class='navbar-start'>
        <Link class='navbar-item' to='/components'>Components</Link>
        <Link class='navbar-item' to='/app'>App</Link>
      </div>
      <hr />
      <div class='navbar-end'>
        <div class='navbar-item'>
          <div class='field is-grouped'>
            <p class='control'>
              <a class='button is-primary' href='https://github.com/cutemachine/hyperbulma'>
                <i class='fa fa-github' />&nbsp;Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
