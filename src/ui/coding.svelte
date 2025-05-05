<script lang="ts">
import Bar from "./bar.svelte";

const skillGroups = [
	{
		name: "Web Development",
		level: 4,
		stack: [
			"HTML",
			"CSS",
			"Tailwind",
			"TypeScript",
			"WebAssembly",
			"React",
			"Next.js",
			"Svelte(Kit)",
			"Hono",
			"Node.js",
			"Deno",
		],
	},
	{
		name: "Databases",
		level: 3,
		stack: ["PostgreSQL", "SQLite", "Redis"],
	},
	{
		name: "General Programming",
		level: 3,
		stack: ["Python", "Java", "TypeScript"],
	},
	{
		name: "DevOps & Cloud",
		level: 3,
		stack: ["Docker", "Vercel", "GitHub Actions", "Cloudflare"],
	},
	{
		name: "Embedded Systems Programming",
		level: 1,
		stack: ["C", "C++", "Pico SDK", "Rust", "MicroPython"],
	},
];
</script>

<section>
  <div class="side-by-side">
    <div class="text">
      Coding has accompanied me my whole life. I started very early by building
      block-based programs in <a
        target="_blank"
        href="https://scratch.mit.edu"
        rel="noopener noreferrer">Scratch</a
      >
      and
      <a
        target="_blank"
        href="https://wikipedia.org/wiki/Lego_Mindstorms"
        rel="noopener noreferrer">Lego Mindstorms</a
      >. I learned the basics of Java as my first programming language and used
      it to build Discord Chatbots. After that, I moved over to Web Development
      and that is where I stuck for the last couple of years. The Web is truly
      the ultimate platform and it is a pleasure to build on top of it. I put
      strong emphasis on Occasionally I dig into low-level coding with
      Microcontrollers, realizing some of my hardware projects using 3D Printing
    </div>
    <div class="table">
      <div class="header">Coding Skills</div>
      <div class="content">
        {#each skillGroups as group}
          <div class="skill">
            <div class="skill-name">{group.name}</div>
            <div class="skill-bar">
              <Bar level={group.level} />
            </div>
            <div class="skill-stack">
              <p>
                {group.stack.join(", ")}
              </p>
            </div>
          </div>
        {/each}
      </div>
      <div class="footer">
        <p>
          Find my projects on <a
            target="_blank"
            href="https://github.com/nanderLP">Github</a
          >.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    border: solid hsla(var(--fg), 0.4);
    border-width: 1px 0 0 0;
    margin-top: 1rem;
    padding-top: 1rem;
  }
  .side-by-side {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: stretch; /* Ensures both children have equal height */
  }
  .text {
    a {
      color: hsla(var(--fg), 1);
      text-decoration: none;
      &:hover {
        color: hsl(var(--fg));
        text-decoration: underline;
      }
    }
  }
  .table {
    padding: 0.5rem;
    min-width: 30ch;
    border: 2px solid hsla(var(--fg), 0.9);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    .header {
      text-align: center;
      font-weight: 800;
      margin-bottom: 1rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .skill {
      display: grid;
      grid: "name bar" "stack stack" / 1fr auto;
      column-gap: 0.5rem;
      align-items: baseline;
      .skill-name {
        grid-area: name;
        font-weight: 600;
      }
      .skill-bar {
        grid-area: bar;
        margin-right: 0.5rem;
      }
      .skill-stack {
        grid-area: stack;
        font-size: 0.8rem;
      }
    }
    .footer {
      margin-top: auto;
      text-align: center;
      font-size: 0.8rem;
      a {
        color: hsla(var(--fg), 0.85);
      }
    }
  }
</style>
