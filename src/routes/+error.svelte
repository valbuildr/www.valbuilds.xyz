<script>
  import { page } from "$app/state";
</script>

<h1 class="text-2xl font-bold text-center">{page.status}</h1>
<h2 class="text-xl text-center">{page.error?.message}</h2>
