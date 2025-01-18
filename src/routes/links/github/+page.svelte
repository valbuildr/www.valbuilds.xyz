<script>
  const url = "https://github.com/valbuildr";

  import { browser } from "$app/environment";

  if (browser) {
    window.location.href = url;
  }
</script>

<h1 class="text-2xl font-bold text-center">Redirecting...</h1>
<h2 class="text-xl text-center">
  If it isn't working, click <a href={url} class="hover:underline">here</a>.
</h2>
