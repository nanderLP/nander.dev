<script lang="ts">
import { handleSpotifyEndpointResponse } from "$lib/api";
import type { SpotifyPlaybackState } from "$lib/spotify";
import { Micro, type Schema } from "effect";
import { animate } from "motion";
import { onMount } from "svelte";

type PlaybackState = Schema.Schema.Type<typeof SpotifyPlaybackState>;

let { initialData }: { initialData: PlaybackState | null } = $props();

let playback = $state(initialData);
let progressRelative = $derived(
	playback ? playback.progress_ms / playback.item.duration_ms : 0,
);

let cleanTrackName = $derived(
	playback ? playback.item.name.replace(/\s*\(feat\..*?\)/i, "") : "",
);

const updateProgress = Micro.sync(() => {
	if (playback?.is_playing && playback?.progress_ms) {
		const newProgress = playback.progress_ms + 1000;
		if (newProgress > playback.item.duration_ms) {
			animate(playback, {
				progress_ms: playback.item.duration_ms,
			});
			// Refetch the new song
			Micro.runFork(updatePlayback);
		} else {
			animate(playback, {
				progress_ms: newProgress,
			});
		}
	}
});

let updatePlayback = Micro.promise(() =>
	handleSpotifyEndpointResponse(
		fetch(`${window.location.origin}/api/spotify`),
	).then((data) => {
		if (data) {
			playback = data;
		}
	}),
);

onMount(() => {
	const updateProgressProgram = Micro.repeat(updateProgress, {
		schedule: Micro.scheduleSpaced(1000),
	});

	const updatePlaybackProgram = Micro.repeat(updatePlayback, {
		schedule: Micro.scheduleSpaced(20000),
	});

	const progressFiber = Micro.runFork(updateProgressProgram);
	const playbackFiber = Micro.runFork(updatePlaybackProgram);

	return () => {
		Micro.fiberInterruptAll([progressFiber, playbackFiber]);
	};
});
</script>

{#if playback}
  <div class="container">
    <div class="artwork">
      <a href={playback.item.external_urls.spotify} target="_blank">
        <picture>
          {#each playback.item.album.images as img, i}
            <source srcset={img.url} media={`(max-width: ${img.width}px)`} />
          {/each}
          <img src={playback.item.album.images[0]?.url} alt="Album Art" />
        </picture>
      </a>
    </div>
    <div class="info">
      <div class="track">{cleanTrackName}</div>
      <div class="artist">
        {#each playback.item.artists as artist, i}
          {#if artist.external_urls.spotify}
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              class="artist-link"
            >
              {artist.name}
            </a>
          {:else}
            {artist.name}
          {/if}{#if i < playback.item.artists.length - 1},{" "}
          {/if}
        {/each}
      </div>
      <div class="progress-bar">
        <div class="progress" style="width: {progressRelative * 100}%"></div>
      </div>
      <div class="meta">
        <span class="time"
          >{Math.floor((playback.progress_ms || 0) / 60000)}:{String(
            Math.floor(((playback.progress_ms || 0) % 60000) / 1000)
          ).padStart(2, "0")}</span
        >
        <span class="sep">/</span>
        <span class="duration"
          >{Math.floor(playback.item.duration_ms / 60000)}:{String(
            Math.floor((playback.item.duration_ms % 60000) / 1000)
          ).padStart(2, "0")}</span
        >
      </div>
    </div>
  </div>
{/if}

<style>
  .container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    overflow: hidden;
    font-size: 8px;
    padding: 4px 8px 4px 4px;
    gap: 10px;
    border: 2px solid hsla(var(--fg), 0.9);
    border-radius: 8px;
  }
  .artwork {
    height: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
      object-fit: cover;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
      image-rendering: auto;
      filter: grayscale(0.9) contrast(1.1);
      transition: filter 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      &:hover {
        filter: none;
      }
    }
  }
  .info {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
  .track {
    font-weight: 600;
    font-size: 1.25em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .artist {
    color: var(--fg);
    font-size: 0.9em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .artist-link {
    color: hsla(var(--fg), 0.9);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .progress {
    background: hsla(var(--fg), 0.9);
    height: 100%;
    border-radius: 2px;
  }
  .progress-bar {
    background: hsla(var(--fg), 0.1);
    border-radius: 2px;
    height: 5px;
    margin: 8px 0 4px 0;
    width: 100%;
    overflow: hidden;
  }
  .meta {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: var(--fg);
    gap: 4px;
  }
</style>
