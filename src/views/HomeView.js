import {h} from 'hyperapp'

export default () => (
  <section class='section'>
    <div class='container'>
      <div class='content'>
        <h1>What Is HyperBulma?</h1>
        <p>HyperBulma is a starter application which utilizes the power of Hyperapp combined with the Bulma CSS framework. You will be up and running with a new Hyperapp application in no time. The project structure is easy to grasp and should not stand in your way.</p>
        <h2>Technologies Used</h2>
        <p>The tech stack is simple but powerful. The starter uses Modern JavaScript using Babel. So you have all the latest JS features and JSX available. Furthermore, you can use Hyperapp and replace React and Redux with it. Bulma is a great CSS framework which will help you to style your app in no time.</p>
        <ul>
          <li><a href='https://babeljs.io'>Next generation JavaScript</a></li>
          <li><a href='https://hyperapp.js.org'>Hyperapp—1 KB JavaScript library for building frontend applications</a></li>
          <li><a href='https://github.com/hyperapp/router'>Hyperapp Router—Declarative routing for Hyperapp using the History API</a></li>
          <li><a href='https://bulma.io'>Bulma—free and open source CSS framework based on Flexbox</a></li>
          <li><a href='https://fontawesome.com'>Fontawesome—the web’s most popular icon set</a></li>
          <li><a href='https://parceljs.org'>Parcel—Blazing fast, zero configuration web application bundler</a></li>
        </ul>
        <h2>Getting Started</h2>
        <p>It is very simple to build your project on top of this starter. Just clone the starter in a folder with your project&apos;s name. Then remove the Git history to be able to initialize your own Git repository. Then install the dependencies with <code>yarn</code>. When the installation has finished you can run the new app with <code>yarn start</code>. These are the steps in more detail:</p>
        <ol>
          <li><code>git clone https://github.com/cutemachine/hyperbulma.git YOUR_PROJECT</code></li>
          <li><code>cd YOUR_PROJECT</code></li>
          <li><code>rm -rf .git</code></li>
          <li><code>git init</code></li>
          <li><code>git add .</code></li>
          <li><code>git commit -m &apos;Initial version of YOUR_PROJECT&apos;</code></li>
          <li><code>yarn</code></li>
          <li><code>yarn start</code></li>
        </ol>
        <h2>How To Contribute</h2>
        <p>You want to contribute to this project? Great. You can contact me through my <a href='https://github.com/cutemachine'>Github profile page</a>, or just send a pull request.
        </p>
      </div>
    </div>
  </section>
)
