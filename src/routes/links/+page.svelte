<script>
  import {
    MastodonSolid,
    BlueskySolid,
    TikTokSolid,
    SteamSolid,
    PronounsPageSolid,
    TwitchSolid,
  } from "$lib/icons";
  import {
    YoutubeSolid,
    DiscordSolid,
    GithubSolid,
    GlobeSolid,
    TwitterSolid,
  } from "flowbite-svelte-icons";
  import SocialMediaLink from "$lib/SocialMediaLink.svelte";
</script>

<div class="flex gap-3 items-center">
  <img
    class="sm:w-24 sm:h-24 w-20 h-20 mb-3 rounded-full shadow-lg"
    src="/pfp.png"
    alt="Profile"
  />
  <div class="flex flex-col gap-2">
    <h3 class="sm:text-3xl text-2xl font-bold">Valentine</h3>
    <h5 class="sm:text-xl text-md text-gray-600 dark:text-gray-400">
      valbuildr • <a
        href="/links/pronounspage"
        target="_blank"
        class="hover:underline">she/they</a
      >
    </h5>
  </div>
</div>

<p>
  a person that makes things on the internet sometimes.
  <br /><br />profile picture by
  <a class="hover:underline" href="https://picrew.me/en/image_maker/1904634"
    >✦絢瀬 on picrew</a
  >.
</p>

<hr class="border-black dark:border-white my-3" />

<div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
  <SocialMediaLink href="/links/youtube">
    <YoutubeSolid />
    <p>Youtube</p>
  </SocialMediaLink>

  <SocialMediaLink href="/links/discord">
    <DiscordSolid />
    <p>Discord</p>
  </SocialMediaLink>

  <SocialMediaLink href="/links/bluesky">
    <BlueskySolid />
    <p>Bluesky</p>
  </SocialMediaLink>

  <SocialMediaLink href="/links/fedi">
    <MastodonSolid />
    <p>Mastodon/Fedi</p>
  </SocialMediaLink>

  <SocialMediaLink href="/links/github">
    <GithubSolid />
    <p>Github</p>
  </SocialMediaLink>

  <div
    class="p-2 flex gap-3 items-center border border-gray-400 dark:border-gray-600 text-gray-400 dark:text-gray-600"
  >
    <TikTokSolid />
    <p>TikTok (Banned in the US)</p>
  </div>

  <!-- <SocialMediaLink href="/links/tiktok">
    <TikTokSolid />
    <p>TikTok</p>
  </SocialMediaLink> -->

  <SocialMediaLink href="/links/steam">
    <SteamSolid />
    <p>Steam</p>
  </SocialMediaLink>

  <SocialMediaLink href="/links/pronounspage">
    <PronounsPageSolid />
    <p>Pronouns.page (English)</p>
  </SocialMediaLink>

  <SocialMediaLink href="/links/twitch">
    <TwitchSolid />
    <p>Twitch</p>
  </SocialMediaLink>
</div>
