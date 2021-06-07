<script>
	import { fade } from 'svelte/transition';
</script>

<nav class="flex justify-center w-full">
	<a class="mx-4 text-lg" transition:fade href="/">Home</a>
	<a class="mx-4 text-lg" transition:fade href="/about">About</a>
	<a class="mx-4 text-lg" transition:fade href="/api/pokemon">API</a>
</nav>
