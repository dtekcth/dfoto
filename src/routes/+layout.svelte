<script>
	import '../app.postcss';
	import '../styles.css';
	import logo from '../assets/logo.png';
</script>

<div class="wrapper">
	<header>
		<nav class="cluster">
			<a href="/">
				<img src={logo} alt="DFoto logo" class="logo" />
			</a>
			<a href="/about">Om oss</a>
		</nav>
	</header>

	<main class="flow grow">
		<slot />
	</main>

	<footer class="box">
		<p>Made with ❤️ by <a href="https://github.com/Malmz">Cral</a></p>
	</footer>
</div>

<style>
	header {
		padding-block: var(--s-1);
		padding-inline: var(--s1);
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	nav {
		justify-content: space-between;
		align-items: center;
	}

	main {
		--flow-space: var(--s2);
	}

	main > ::global(*) {
		--flow-space: unset;
	}

	nav a {
		color: black;
	}

	nav img {
		display: block;
		height: var(--s2);
	}

	footer {
		background-color: #212121;
		color: white;
		justify-self: end;
	}
</style>
