<script lang="ts">
const { level = 0 } = $props<{ level?: number }>(); // 0 to 4
</script>

<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Skill level"
>
  {#each [0, 1, 2, 3] as i}
    <rect
      x={i * 5}
      y={20 - (i + 1) * 4}
      width="3"
      height={(i + 1) * 4}
      rx="1"
      class:active={level > i}
    />
  {/each}
</svg>

<style>
  rect {
    fill: hsla(var(--fg), 0.2);
    transition: fill 0.2s;
  }
  .active {
    fill: hsl(var(--fg));
  }
</style>
