<script>
	import 'modern-normalize/modern-normalize.css';
	import 'uno.css';
	import '../styles.css';
	import logo from '../assets/logo.png';
</script>

<div class="flex flex-col min-h-screen">
	<header class="p-block-3 p-inline-6">
		<nav class="flex flex-wrap justify-between items-center">
			<a class="text-black" href="/">
				<img src={logo} alt="DFoto logo" class="block h-9" />
			</a>
			<a class="text-black" href="/about">Om oss</a>
		</nav>
	</header>

	<main class="prose prose-stone max-w-none grow">
		<slot />
	</main>

	<footer class="box bg-neutral-800 text-neutral-50">
		<p>
			Made with ❤️ by <a href="https://github.com/Malmz">Cral</a> &
			<a href="https://github.com/Nil">Nil</a>
		</p>
	</footer>
</div>
