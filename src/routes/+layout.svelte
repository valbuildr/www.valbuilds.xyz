<script lang="ts">
  import "../app.css";
  let { children } = $props();
  import DarkMode from "$lib/DarkMode.svelte";
</script>

<div
  class="bg-[#E7E7E7] dark:bg-[#161616] min-h-screen text-black dark:text-white"
>
  <nav
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 2xl:px-0"
  >
    <a href="/" class="flex items-center space-x-3">
      <span
        class="dark:bg-primary-700 bg-primary-400 p-3 font-mono font-bold sm:text-xl text-md"
        >valbuildr</span
      >
    </a>
    <div class="w-auto" id="navbar-default">
      <a
        href="/"
        class="font-mono text-blue-600 dark:text-blue-300 hover:underline"
        >home</a
      >
      <span class="px-2">•</span>
      <a
        href="/playlist"
        class="font-mono text-blue-600 dark:text-blue-300 hover:underline"
        >playlist</a
      >
      <span class="px-2">•</span>
      <a
        href="/cookies"
        class="font-mono text-blue-600 dark:text-blue-300 hover:underline"
        >cookies</a
      >
      <span class="px-2">•</span>
      <DarkMode />
    </div>
  </nav>
  <div class="max-w-screen-xl my-2 mx-auto px-4 2xl:px-0 font-mono">
    {@render children()}
  </div>
  <a rel="me" class="hidden" href="https://wetdry.world/@valbuildr">Mastodon</a>
</div>
