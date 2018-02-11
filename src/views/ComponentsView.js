import { h } from "hyperapp"

export default () => (
  <section class="section">
    <div class="container">
      <h1 class="title">Components</h1>
      <h2 class="subtitle">
        Showcase of some Bulma components.
      </h2>
      <div class="block box">
        <h1 class="title">h1 title</h1>
        <h2 class="subtitle">h2 subtitle</h2>
        <h1 class="title is-1">title is-1</h1>
        <h2 class="title is-2">title is-2</h2>
        <h3 class="title is-3">title is-3</h3>
        <h4 class="title is-4">title is-4</h4>
        <h5 class="title is-5">title is-5</h5>
        <h6 class="title is-6">title is-6</h6>
      </div>
      <div class="block box">
        <p class="content is-small">content is-small</p>
        <p class="content is-medium">content is-medium</p>
        <p class="content is-large">content is-large</p>
      </div>
      <div class="block box">
        <button class="button">button</button>
        <button class="button is-white">button is-white</button>
        <button class="button is-light">button is-light</button>
        <button class="button is-dark">button is-dark</button>
        <button class="button is-black">button is-black</button>
        <button class="button is-link">button is-link</button>
      </div>
      <div class="block box">
        <a href="" class="button is-primary">button is-primary</a>
        <a href="" class="button is-info">button is-info</a>
        <a href="" class="button is-success">button is-success</a>
        <a href="" class="button is-warning">button is-warning</a>
        <a href="" class="button is-danger">button is-danger</a>
      </div>
      <div class="block box">
        <a href="" class="button is-primary is-small">button is-primary is-small</a>
        <a href="" class="button is-info is-medium">button is-info is-medium</a>
        <a href="" class="button is-success is-large">button is-success is-large</a>
      </div>
      <div class="block box">
        <a href="" class="button is-primary is-outlined">button is-primary is-outlined</a>
        <a href="" class="button is-info is-outlined">button is-info is-outlined</a>
        <a href="" class="button is-success is-outlined">button is-success is-outlined</a>
        <a href="" class="button is-warning is-outlined">button is-warning is-outlined</a>
        <a href="" class="button is-danger is-outlined">button is-danger is-outlined</a>
      </div>
      <div class="block box">
        <a href="" class="button is-primary is-inverted">button is-primary is-inverted</a>
        <a href="" class="button is-info is-inverted">button is-info is-inverted</a>
        <a href="" class="button is-success is-inverted">button is-success is-inverted</a>
        <a href="" class="button is-warning is-inverted">button is-warning is-inverted</a>
        <a href="" class="button is-danger is-inverted">button is-danger is-inverted</a>
      </div>
      <div class="block box">
        <a href="" class="button is-hovered">button is-hovered</a>
        <a href="" class="button is-focused">button is-focused</a>
        <a href="" class="button is-active">button is-active</a>
        <a href="" class="button is-loading">button is-loading</a>
        <a href="" class="button" disabled>button disabled</a>
      </div>
      <div class="block box">
        <h1 class="title">HyperBulma</h1>
      </div>
      <div class="block box">
        <div class="notification">
          <button class="delete"></button>
          Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
        </div>
        <div class="notification is-primary">
          <button class="delete"></button>
          Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
        </div>
        <div class="notification is-info">
          <button class="delete"></button>
          Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
        </div>
        <div class="notification is-success">
          <button class="delete"></button>
          Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
        </div>
        <div class="notification is-warning">
          <button class="delete"></button>
          Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
        </div>
        <div class="notification is-danger">
          <button class="delete"></button>
          Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
        </div>
      </div>
      <div class="block box">
        <span class="tag">tag</span>
        <span class="tag is-black">tag is-black</span>
        <span class="tag is-dark">tag is-dark</span>
        <span class="tag is-light">tag is-light</span>
        <span class="tag is-white">tag is-white</span>
        <span class="tag is-primary">tag is-primary</span>
        <span class="tag is-info">tag is-info</span>
        <span class="tag is-success">tag is-success</span>
        <span class="tag is-warning is-medium">tag is-warning is-medium</span>
        <span class="tag is-danger is-large">tag is-danger is-large&nbsp;<button class="delete"></button></span>
      </div>
      <div class="block box">
        <article class="message">
          <div class="message-header">
            <p>Be water, my friend</p>
          </div>
          <div class="message-body">
            Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
          </div>
        </article>

        <article class="message is-primary">
          <div class="message-header">
            <p>Be water, my friend</p>
          </div>
          <div class="message-body">
            Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
          </div>
        </article>

        <article class="message is-success">
          <div class="message-header">
            <p>Be water, my friend</p>
          </div>
          <div class="message-body">
            Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
          </div>
        </article>

        <article class="message is-info">
          <div class="message-header">
            <p>Be water, my friend</p>
          </div>
          <div class="message-body">
            Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
          </div>
        </article>

        <article class="message is-warning">
          <div class="message-header">
            <p>Be water, my friend</p>
          </div>
          <div class="message-body">
            Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
          </div>
        </article>

        <article class="message is-danger">
          <div class="message-header">
            <p>Be water, my friend</p>
          </div>
          <div class="message-body">
            Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
          </div>
        </article>
      </div>
      <div class="block box">
        <aside class="menu">
          <p class="menu-label">menu-label</p>
          <ul class="menu-list">
            <li><a href="">menu-list</a></li>
            <li><a href="">menu-list</a></li>
          </ul>
          <p class="menu-label">menu-label</p>
          <ul class="menu-list">
            <li>
              <a class="is-active" href="">menu-list is-active</a>
              <ul>
                <li><a href="">menu-list</a></li>
                <li><a href="">menu-list</a></li>
                <li><a href="">menu-list</a></li>
              </ul>
            </li>
            <li><a href="">menu-list</a></li>
            <li><a href="">menu-list</a></li>
          </ul>
        </aside>
      </div>
      <div class="block box">
        <div class="card">
          <div class="card-content">
            <p class="title">
              Empty your mind. Be formless, shapeless, like water. Now, you put water into a cup, it becomes the cup. You put water into a bottle, it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow, or it can crash. Be water, my friend.
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a href=""><i class="fa fa-github" />&nbsp;Github</a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                <a href=""><i class="fa fa-twitter" />&nbsp;Twitter</a>
              </span>
            </p>
          </footer>
        </div>
      </div>
      <div class="block box">
        <nav class="pagination">
          <a href="" class="pagination-previous" disabled>Previous</a>
          <a href="" class="pagination-next">Next</a>
          <ul class="pagination-list">
            <li>
              <a href="" class="pagination-link is-current">1</a>
            </li>
            <li>
              <a href="" class="pagination-link">2</a>
            </li>
            <li>
              <a href="" class="pagination-link">3</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="block box">
        <nav class="level">
          <div class="level-left">
            <p class="level-item"><a>trending</a></p>
            <p class="level-item"><a>new</a></p>
            <p class="level-item"><a>hot</a></p>
            <p class="level-item"><a>promoted</a></p>
            <div class="level-item">
              <div class="field">
                <p class="control">
                  <input type="text" class="input" placeholder="Search …" />
                </p>
              </div>
            </div>
          </div>
          <div class="level-right">
            <p class="level-item"><a class="button is-primary">Post</a></p>
          </div>
        </nav>
      </div>
    </div>
  </section>
)
