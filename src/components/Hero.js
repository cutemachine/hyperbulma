import { h, app } from 'hyperapp'

export default ({ color, title, subtitle }, children) => (
  <section class={`hero is-${color}`}>
		<div class='hero-body'>
			<div class='container'>
				<h1 class='title is-1'>{title}</h1>
				<h2 class='subtitle is-2'>{subtitle}</h2>
			</div>
		</div>
	</section>
)
