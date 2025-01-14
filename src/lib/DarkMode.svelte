<script>
  import { twMerge } from "tailwind-merge";

  let {
    defaultClass = "font-mono text-blue-600 dark:text-blue-300 hover:underline",
    ariaLabel = "Dark mode",
  } = $props();

  const toggleTheme = (ev) => {
    const target = ev.target;
    const isDark =
      target.ownerDocument.documentElement.classList.toggle("dark");
    if (target.ownerDocument === document)
      localStorage.setItem("color-theme", isDark ? "dark" : "light");
  };
</script>

<svelte:head>
  <script>
    if ("color-theme" in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem("color-theme") === "dark"
        ? window.document.documentElement.classList.add("dark")
        : window.document.documentElement.classList.remove("dark");
    } else {
      // browser preference - does not overrides
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        window.document.documentElement.classList.add("dark");
    }
  </script>
</svelte:head>

<button
  on:click={toggleTheme}
  aria-label={ariaLabel}
  type="button"
  class={defaultClass}
>
  <p class="hidden dark:block">☀️</p>
  <p class="dark:hidden block">🌑</p>
</button>
