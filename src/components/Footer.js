import { h, app } from 'hyperapp'

export default ({ color }, children) => (
  <footer class={`footer ${color}`}>
		<div class='container'>
			<div class='content has-text-centered'>
				<p>{children}</p>
			</div>
		</div>
	</footer>
)
