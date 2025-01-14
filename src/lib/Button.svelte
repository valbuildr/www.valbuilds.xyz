<script>
  let { url, imageUrl, alt } = $props();
</script>

<a href={url} target="_blank">
  <img src={imageUrl} {alt} />
</a>
