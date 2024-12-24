<script lang="ts">
  let pronounsPageLink: string = "https://pronouns.page/@valbuilded";
  let githubLink: string = "https://github.com/valbuildr";
</script>

<header
  class="dark:bg-primary-700 dark:text-white bg-primary-400 text-black py-10"
>
  <h1
    class="text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold"
  >
    Hello, I'm Valentine!
  </h1>
  <h2 class="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl">
    I make things on the internet sometimes.
  </h2>
</header>

<hr class="border-black dark:border-white" />

<div
  class="dark:bg-primary-800 dark:text-white bg-primary-300 text-black py-5"
  id="gender-and-pronouns"
>
  <h2
    class="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold mb-3"
  >
    Gender & Pronouns
  </h2>

  <p class="mx-6">
    <b>I'm transgender</b>, which means that my gender identity does not align
    with the sex I was assigned at birth. <br />
    <b>I go by she/they pronouns</b>, which basically means I'm fine with being
    referenced to with the pronouns she/her or they/them.<br />
    For more info on my pronoun and name preferences, feel free to visit
    <a href={pronounsPageLink} class="hover:underline" target="_blank">
      my card on pronouns.page
    </a>.
  </p>
</div>

<hr class="border-black dark:border-white" />

<div
  class="dark:bg-primary-800 dark:text-white bg-primary-300 text-black py-5"
  id="recent-projects"
>
  <h2
    class="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold mb-3"
  >
    Recent Projects
  </h2>

  <div class="grid md:grid-cols-3 gap-3 mx-6">
    <div
      class="dark:bg-primary-700 dark:text-white bg-primary-400 text-black p-3"
    >
      <h4 class="lg:text-2xl md:text-xl sm:text-lg text-md mb-3">
        <a
          href="https://github.com/valbuildr/fansbot"
          class="hover:underline"
          target="_blank"
        >
          BBC Fans Bot
        </a>
      </h4>

      <p>
        A Discord bot written in discord.py for the BBC Fans Discord Server.
      </p>
    </div>
    <div
      class="dark:bg-primary-700 dark:text-white bg-primary-400 text-black p-3"
    >
      <h4 class="lg:text-2xl md:text-xl sm:text-lg text-md mb-3">
        <a
          href="https://links.valbuilds.xyz"
          class="hover:underline"
          target="_blank"
        >
          links.valbuilds.xyz
        </a>
      </h4>

      <p>A website linking to all of my social media platforms.</p>
    </div>
    <div
      class="dark:bg-primary-700 dark:text-white bg-primary-400 text-black p-3"
    >
      <h4 class="lg:text-2xl md:text-xl sm:text-lg text-md mb-3">
        <a
          href="https://github.com/valbuildr/www.valbuilds.xyz"
          class="hover:underline"
          target="_blank"
          title="Click here to see the website's source code!"
        >
          www.valbuilds.xyz
        </a>
      </h4>

      <p>My main website.</p>
    </div>
  </div>
</div>

<hr class="border-black dark:border-white" />

<div
  class="dark:bg-primary-800 dark:text-white bg-primary-300 text-black py-5"
  id="language-location-timezone"
>
  <h2
    class="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold mb-3"
  >
    Language, Location, & Timezone
  </h2>

  <p class="mx-6">
    <b>I only speak English</b>, though I do know bits and pieces of a few other
    languages, it's nowhere enough to be fluent. If you contact me in a
    different language, I may put your messages through a tool like Google
    Translate to try and understand it and answer you. (My response will also go
    through a translation tool) <br />
    <b>I live in the United States</b>. More specifically, Wisconsin. I hate it
    here too. And no, I will not dox myself.<br />
    <b>I am in the CST/CDT timezone</b>. Dependent on the time of year, I could
    be either 5 hours or 6 hours behind UTC. Simply googling
    <a
      href="https://www.google.com/search?q=what+time+is+it+in+chicago"
      target="_blank"
      class="hover:underline">"what time is it in chicago"</a
    > will get you what time it is for me.
  </p>
</div>

<hr class="border-black dark:border-white" />

<div
  class="dark:bg-primary-800 dark:text-white bg-primary-300 text-black py-5"
  id="programming"
>
  <h2
    class="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold mb-3"
  >
    Programming
  </h2>

  <p class="mx-6">
    As you might be able to tell, I know how to program things. (i'm a trans
    girl, who could've guessed)<br />
    I know JavaScript, Python, some Java, and some Lua.<br />
    For a bunch of my current (and past) projects with code, check out
    <a href={githubLink} class="hover:underline" target="_blank">my GitHub</a
    >.<br />
    One last thing for this section, <b>JavaScript is NOT the same as Java</b>.
  </p>
</div>

<hr class="border-black dark:border-white" />

<div
  class="dark:bg-primary-800 dark:text-white bg-primary-300 text-black py-5"
  id="contact-me"
>
  <h2
    class="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold mb-3"
  >
    Contact Me
  </h2>

  <p class="mx-6">
    All of my social media platforms are listed on
    <a
      href="https://links.valbuilds.xyz"
      class="hover:underline"
      target="_blank"
    >
      links.valbuilds.xyz
    </a>.<br />
    I currently do <span class="underline">not</span> have a public email. If
    you find an email for me anywhere, don't even bother. I won't reply.<br />
    The fastest way to contact me is on Discord, I usually have it open when I'm
    at my computer.
  </p>
</div>

<hr class="border-black dark:border-white" />

<div
  class="dark:bg-primary-800 dark:text-white bg-primary-300 text-black py-5"
  id="bottom"
>
  <p class="text-center">
    you've reached the bottom. head <a href="#top" class="hover:underline"
      >back to the top</a
    >?
  </p>
</div>
