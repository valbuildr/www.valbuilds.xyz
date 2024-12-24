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

    <hr class="border-black dark:border-white" />

    <div
      class="dark:bg-primary-800 dark:text-white bg-primary-300 text-black py-5 px-6"
      id="bottom"
    >
      <p class="mb-2">
        You've reached the bottom. Head <a href="#top" class="hover:underline"
          >back to the top</a
        >?
      </p>
      <p class="mb-2">
        This website was built with <a
          href="https://svelte.dev/"
          class="hover:underline"
          target="_blank">Svelte 5</a
        >
        and hosted on
        <a
          href="https://www.netlify.com/"
          class="hover:underline"
          target="_blank">Netlify</a
        >. View the source code
        <a
          href="https://github.com/valbuildr/www.valbuilds.xyz"
          class="hover:underline"
          target="_blank">here</a
        >.
      </p>
      <p class="mb-2">
        This website does <span class="underline">NOT</span> use cookies to
        track you. Read the
        <a href="/cookies" class="hover:underline">Cookie Policy</a> for more info.
      </p>
      <p>
        Made with ❤️ by Valentine. 🏳️‍⚧️
      </p>
    </div>
  </div>
  <a rel="me" class="hidden" href="https://wetdry.world/@valbuildr">Mastodon</a>
</div>
