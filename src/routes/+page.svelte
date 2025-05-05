<script lang="ts">
import AboutMe from "../ui/about-me.svelte";
import Coding from "../ui/coding.svelte";
import Spotify from "../ui/spotify.svelte";
import type { PageProps } from "./$types";

let { data }: PageProps = $props();
</script>

<main>
  <div id="profile">
    <img
      id="profile-picture"
      src="/profile.webp"
      alt="A portrait by my beautiful girlfriend"
    />
    <h1 id="name">Nander</h1>
  </div>
  <div id="socials">
    <div id="links">
      <div>
        <a
          target="_blank"
          class="socials-item"
          id="discord"
          href="https://discord.com/users/329630845805789186"
          aria-label="Discord"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.64 96">
            <path
              fill="currentColor"
              d="M81.15 0a73.74 73.74 0 0 0-3.36 6.8 97.87 97.87 0 0 0-29 0A67.87 67.87 0 0 0 45.45 0 105.55 105.55 0 0 0 19.3 8.06C2.78 32.53-1.7 56.37.53 79.89c9.67 7.14 20.5 12.6 32.05 16.08 2.6-3.48 4.9-7.2 6.87-11.06a69.45 69.45 0 0 1-10.8-5.15c.9-.66 1.78-1.34 2.64-2a75.26 75.26 0 0 0 64.08 0c.86.71 1.74 1.4 2.65 2a68.77 68.77 0 0 1-10.83 5.18A76.9 76.9 0 0 0 94.06 96a104.99 104.99 0 0 0 32.05-16.06c2.62-27.28-4.5-50.92-18.82-71.86-8.3-3.81-17.1-6.51-26.11-8.03L81.15 0ZM42.28 65.41c-6.24 0-11.42-5.65-11.42-12.65s4.98-12.68 11.4-12.68 11.51 5.71 11.41 12.68c-.1 6.97-5.03 12.65-11.39 12.65Zm42.08 0c-6.27 0-11.4-5.65-11.4-12.65s4.98-12.68 11.4-12.68 11.49 5.71 11.39 12.68c-.1 6.97-5.03 12.65-11.4 12.65Z"
            />
          </svg>
        </a>
        <a
          target="_blank"
          class="socials-item"
          id="github"
          href="https://github.com/nanderLP"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.85 0C21.84 0 0 22 0 49.22 0 70.97 14 89.39 33.4 95.9c2.43.49 3.32-1.06 3.32-2.37 0-1.14-.08-5.05-.08-9.12-13.59 2.93-16.42-5.87-16.42-5.87-2.18-5.7-5.42-7.17-5.42-7.17-4.45-3.01.33-3.01.33-3.01 4.93.32 7.52 5.05 7.52 5.05 4.37 7.5 11.4 5.38 14.23 4.07.4-3.18 1.7-5.38 3.08-6.6-10.84-1.14-22.25-5.38-22.25-24.28 0-5.38 1.94-9.78 5.02-13.2-.49-1.22-2.19-6.28.48-13.04 0 0 4.13-1.3 13.43 5.05a46.97 46.97 0 0 1 12.21-1.63c4.13 0 8.33.57 12.22 1.63 9.3-6.35 13.42-5.05 13.42-5.05 2.67 6.76.97 11.82.49 13.04a18.9 18.9 0 0 1 5.01 13.2c0 18.9-11.4 23.06-22.32 24.28 1.78 1.55 3.32 4.48 3.32 9.13 0 6.6-.08 11.9-.08 13.52 0 1.3.89 2.86 3.31 2.37a49.18 49.18 0 0 0 33.4-46.7C97.72 22 75.8 0 48.86 0z"
            />
          </svg>
        </a>
      </div>
      <div>
        <a
          class="socials-item"
          id="email"
          href="mailto:nander@nander.dev"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"
            />
            <rect
              width="18"
              height="14"
              x="3"
              y="5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              rx="2"
            />
          </svg>
        </a>
        <a
          target="_blank"
          class="socials-item"
          id="twitter"
          href="https://x.com/real_nander"
          aria-label="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M500.4 94.78a194.22 194.22 0 0 1-24.76 9.03 109.47 109.47 0 0 0 22.28-39.2A8.26 8.26 0 0 0 485.84 55a194.87 194.87 0 0 1-57.6 22.76A110.46 110.46 0 0 0 351.3 46.4c-60.61 0-109.92 49.3-109.92 109.9 0 4.78.3 9.53.9 14.2A281.39 281.39 0 0 1 49.16 68.06a8.25 8.25 0 0 0-13.54 1.07 109.85 109.85 0 0 0-14.89 55.26c0 26.48 9.46 51.61 26.16 71.25a93.12 93.12 0 0 1-14.71-6.57 8.25 8.25 0 0 0-12.27 7.03v1.47c0 39.53 21.27 75.12 53.8 94.52-2.8-.28-5.6-.69-8.37-1.22a8.25 8.25 0 0 0-9.4 10.63 109.87 109.87 0 0 0 80.5 73.67c-31.08 19.47-66.62 29.67-103.93 29.67-7.79 0-15.62-.46-23.28-1.37a8.27 8.27 0 0 0-5.43 15.16 296.4 296.4 0 0 0 160.28 46.98c111.9 0 181.91-52.77 220.93-97.04 48.66-55.2 76.56-128.26 76.56-200.45 0-3.02-.04-6.06-.14-9.1a213.66 213.66 0 0 0 49.18-52.08 8.26 8.26 0 0 0-10.21-12.15z"
            />
          </svg></a
        >
      </div>
    </div>
    <Spotify initialData={data.spotify} />
  </div>
  <div id="about-me">
    <AboutMe />
    <Coding />
  </div>
</main>

<style>
  #socials {
    grid-area: socials;
    display: flex;
    flex-direction: column;

    width: clamp(196px, 100%, 256px);

    margin-inline: auto;
    @media (min-width: 50ch) {
      margin-inline: auto 0;
    }

    #links {
      margin-bottom: 0.5rem;
    }

    #links > * {
      display: grid;
      gap: 2px;
    }

    #links > :nth-child(1) {
      grid:
        "discord" "github"
        / 1fr 2fr;

      & > :first-child {
        border-top-left-radius: 1rem;
      }
      & > :last-child {
        border-top-right-radius: 1rem;
      }
    }

    #links > :nth-child(2) {
      grid:
        "email" "twitter"
        / 2fr 1fr;

      & > :first-child {
        border-bottom-left-radius: 1rem;
      }
      & > :last-child {
        border-bottom-right-radius: 1rem;
      }
    }
  }

  .socials-item {
    border: 2px solid hsla(var(--fg), 0.9);
    color: hsla(var(--fg), 0.9);
    padding-block: 0.5rem;
    transition: background-color, color;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: hsl(var(--fg));
      color: hsl(var(--bg));
    }

    & > svg {
      margin-inline: auto;
      width: 2rem;
      height: 2rem;
    }
  }

  main {
    padding-top: 5rem;
    margin-inline: 4rem;
    max-width: 65ch;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto) 1fr;
    grid-template-areas:
      "profile"
      "socials"
      "about-me";
    @media (min-width: 50ch) {
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "profile socials"
        "about-me about-me";
    }
  }

  #profile-picture {
    border-radius: 48px;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    image-rendering: optimizeQuality;
    object-fit: cover;
    object-position: center 25%;
    display: flex;
  }

  #name {
    grid-area: name;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }

  #profile {
    grid-area: profile;
    display: flex;
    flex-direction: column;
  }

  #about-me {
    grid-area: about-me;
    margin-top: 1rem;
    padding-top: 1rem;
    border: solid hsla(var(--fg), 0.4);
    border-width: 1px 0 0 0;
    line-height: 1.7;
    color: hsla(var(--fg), 0.85);
  }
</style>
