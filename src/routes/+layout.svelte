<script>
import "./reset.css";
</script>

<slot />

<style>
  @font-face {
    font-family: "Monaspace Argon";
    src:
      url("fonts/MonaspaceArgon.woff2") format("woff2 supports variations"),
      url("fonts/MonaspaceArgon.woff2") format("woff2-variations");
  }

  :root {
    font-family: "Monaspace Argon", monospace;
    font-feature-settings: "calt", "liga", "ss01", "ss02", "ss03", "ss04",
      "ss05", "ss06", "ss07", "ss08", "ss09";

    --bg: 0, 0%, 100%;
    --fg: 0, 0%, 0%;
    @media (prefers-color-scheme: dark) {
      --bg: 0, 0%, 7%;
      --fg: 0, 0%, 100%;
    }
  }

  :global(body) {
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    background-color: hsl(var(--bg));
    color: hsl(var(--fg));
  }
</style>
