<script>
	import 'modern-normalize/modern-normalize.css';
	import 'uno.css';
	import '../styles.css';
	import logo from '../assets/logo.png';

	export let data;
</script>

<div class="flex flex-col min-h-screen">
	<header class="p-block-3 p-inline-6">
		<nav class="flex flex-wrap justify-between items-center">
			<a class="text-black" href="/">
				<img src={logo} alt="DFoto logo" class="block h-9" />
			</a>
			<div class="flex gap-4 items-center">
				{#if data.session}
					<a href="/profile" class="text-black flex items-center gap-2">
						<img
							class="w-8 h-8 inline rounded-full"
							src={data.session.picture}
							alt="User profile"
						/>
						<span>{data.session.name}</span>
					</a>
				{:else}
					<a class="text-black" href="/auth/signin">Logga in</a>
				{/if}
			</div>
		</nav>
	</header>

	<main class="prose prose-stone max-w-none grow">
		<slot />
	</main>

	<footer class="flex p-6 bg-neutral-800 text-neutral-50 flex justify-between">
		<span>
			Made with ❤️ by <a href="https://github.com/Malmz">Cral</a> &
			<a href="https://github.com/Nil">Nil</a>
		</span>
		<span>
			<a href="/about">Om oss</a>
		</span>
	</footer>
</div>
