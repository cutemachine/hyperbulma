import { h } from "hyperapp"

export default ({ state, actions }) => (
  <section class="section">
    <div class="container">
      <h1 class="title">App</h1>
      <h2 class="subtitle">A sample application using state.</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Counter Component</p>
        </header>
        <div class="card-content">
          <div class='columns is-primary'>
            <div class='column is-half is-offset-one-quarter is-size-1 has-text-centered'>
              {state.count}
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a class="button is-large is-danger card-footer-item" onclick={actions.decrement}><i class='fa fa-thumbs-o-down' /></a>
          <a class="button is-large is-primary is-pulled-right card-footer-item" onclick={actions.increment}><i class='fa fa-thumbs-o-up' /></a>
        </footer>
      </div>
		</div>
  </section>
)
