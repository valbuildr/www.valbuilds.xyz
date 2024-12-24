<script lang="ts">
  let link: string =
    "https://music.apple.com/us/playlist/vals-music/pl.u-4JomXY9uaKAjBx9";

  // this is not to be used, just a reference :)
  let songExample: string[] = [
    "Song Title",
    "Sing Artist(s)",
    "Album Art URL",
    "song.link URL",
    "(if starred) Why it's starred",
    "(if starred) ID for icon and popover",
  ];

  let songs: string[][] = [
    [
      "7 Weeks & 3 Days",
      "yungatita",
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/49/c4/ba/49c4ba51-b776-10bd-8be8-dec49b01353d/195939486534_cover.jpg/512x512bb.jpg",
      "https://song.link/i/1697066899",
      "",
      "",
    ],
    [
      "yummy dummy",
      "Yameii Online",
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7e/ec/89/7eec89a4-6880-d7e8-0314-5f734032bcf8/dj.zjzvhebm.png/512x512bb.jpg",
      "https://song.link/i/1672693594",
      "",
      "",
    ],
    [
      "8 Now",
      "food house, Gupi & Fraxiom",
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9c/fe/a3/9cfea372-df54-a27d-8c04-74cf6756235c/1243.jpg/512x512bb.jpg",
      "https://song.link/i/1535282234",
      "",
      "",
    ],
    [
      "365",
      "Charli xcx",
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/13/68/3b1368de-9cf1-076f-c7d1-fa2720bfc55c/075679666130.jpg/512x512bb.jpg",
      "https://song.link/i/1739080656",
      "",
      "",
    ],
    [
      "360",
      "Charli xcx",
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/13/68/3b1368de-9cf1-076f-c7d1-fa2720bfc55c/075679666130.jpg/512x512bb.jpg",
      "https://song.link/i/1739079976",
      "",
      "",
    ],
    [
      "5168 Days",
      "Seb Lowe",
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/20/e9/bb/20e9bbf1-c2f4-5c5c-3577-255f101acae3/085365318441.jpg/512x512bb.jpg",
      "https://song.link/i/1752493024",
      "This song perfectly describes the anger that a lot of people had with the UK government before the July 2024 election. It's also a good song to just yell along with.",
      "five-thousand-one-hundred-and-sixty-eight-days",
    ],
    [
      "20190724",
      "Mac DeMarco",
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/bd/49/7c/bd497cd4-9b88-2b15-f68e-abe041c6be1d/23UMGIM38705.rgb.jpg/512x512bb.jpg",
      "https://song.link/i/1681873761",
      "",
      "",
    ],
    [
      "Highway to Hell",
      "AC/DC",
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b9/c8/ef/b9c8ef42-bbc9-64df-11f8-717571f6730f/886443673458.jpg/512x512bb.jpg",
      "https://song.link/i/574044008",
      "",
      "",
    ],
    [
      "Prom Queen",
      "Beach Bunny",
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/d0/1b/9f/d01b9f8a-fd47-4428-ef15-e5f23860e988/Prom_Queen_Art.jpg/512x512bb.jpg",
      "https://song.link/i/1476463574",
      "",
      "",
    ],
    [
      "Baby",
      "Charli xcx",
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/29/b7/6a/29b76a24-fc59-a448-cf80-3f59dedf92c0/190296409165.jpg/512x512bb.jpg",
      "https://song.link/i/1592545544",
      "",
      "",
    ],
    [
      "#BrooklynBloodPop!",
      "SyKo",
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/cf/f0/ad/cff0ad8f-66ca-7580-74c2-2ab20800b63a/artwork.jpg/512x512bb.jpg",
      "https://song.link/i/1600513002",
      "",
      "",
    ],
    [
      "The Town Inside Me",
      "AISHA & Arc System Works",
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3a/d4/f3/3ad4f306-e9a2-00f2-aae4-58bcca28d0c4/859758617813_cover.jpg/512x512bb.jpg",
      "https://song.link/i/1641753410",
      "",
      "",
    ],
    [
      "Seven Nation Army",
      "The White Stripes",
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/07/25/09/0725098a-09f4-f240-e551-94384a590371/886448799009.jpg/512x512bb.jpg",
      "https://song.link/i/1533513537",
      "",
      "",
    ],
  ];

  import { StarSolid } from "flowbite-svelte-icons";

  import { Button, Popover } from "flowbite-svelte";
</script>

<head>
  <title>Playlist - valbuilds.xyz</title>
</head>

<div class="dark:bg-red-800 dark:text-white bg-red-300 text-black py-5 px-6">
  This page is <b>uninished</b>. Expect bugs ahead!
</div>

<hr class="border-black dark:border-white" />

{#each songs as song}
  <a
    class="flex gap-3 p-2 items-center hover:bg-primary-300 dark:hover:bg-primary-800"
    href={song[3]}
  >
    <img
      class="w-16 h-16 rounded-lg"
      src={song[2]}
      alt="Album Art for '{song[0]}'"
    />

    <div class="flex flex-col">
      <p class="text-lg font-bold">{song[0]}</p>
      <p>{song[1]}</p>
    </div>

    {#if song[4] && song[5]}
      <button id={song[5]}>
        <StarSolid />
        <span class="sr-only">Read why this is a starred song</span>
      </button>

      <Popover
        triggeredBy="#{song[5]}"
        class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
        placement="bottom-start"
      >
        {song[4]}
      </Popover>
    {/if}
  </a>
{/each}

<hr class="border-black dark:border-white" />

<div class="py-5 px-6">
  <p>
    Click <a href={link} class="hover:underline" target="_blank">here</a> to see
    the playlist on Apple Music.
  </p>
  <p>
    This playlist will not be ported to Spotify, Amazon Music, or any other
    streaming service. (i just cba to do so)
  </p>
</div>

<hr class="border-black dark:border-white" />

<div class="py-5 px-6">
  <p>Album art is provided by a third-party.</p>
</div>
