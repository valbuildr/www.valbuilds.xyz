<script lang="ts">
  import { twMerge } from "tailwind-merge";

  let { children, href, target = "_blank", c = "" } = $props();

  let baseClass =
    "p-2 flex gap-3 items-center border border-[#5B1AAA] dark:border-[#B521CC] hover:bg-[#5B1AAA] hover:dark:bg-[#B521CC] hover:text-white";
</script>

<a {href} class={twMerge(baseClass, c)} {target}>
  {@render children()}
</a>
