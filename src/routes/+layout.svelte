<script lang="ts">
  import "../app.css";
  let { children } = $props();
  import { DarkMode } from "flowbite-svelte";
</script>

<div
  class="bg-primary-200 dark:bg-primary-950 text-black dark:text-white font-mono min-h-screen"
>
  <nav
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-black"
  >
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span
        class="dark:bg-primary-400 dark:text-black bg-primary-700 text-white p-3 font-mono font-bold sm:text-xl text-md"
        >valbuilds.xyz</span
      >
    </a>
    <div class="w-auto" id="navbar-default">
      <DarkMode class="hover:bg-primary-100 dark:hover:bg-primary-900" />
    </div>
  </nav>
  <div class="flex flex-col flex-1 max-w-screen-xl mx-auto p-4">
    {@render children()}
  </div>
  <a rel="me" class="hidden" href="https://wetdry.world/@valbuildr">Mastodon</a>
</div>
