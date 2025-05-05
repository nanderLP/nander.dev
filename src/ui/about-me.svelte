<script lang="ts">
import OsiroLogo from "./osiro.svg?raw";

const age = $derived.by(() => {
	// 15th december 2005
	const birthday = new Date(2005, 11, 15);
	const today = new Date();
	let years = today.getFullYear() - birthday.getFullYear();
	const hasHadBirthdayThisYear =
		today.getMonth() > birthday.getMonth() ||
		(today.getMonth() === birthday.getMonth() &&
			today.getDate() >= birthday.getDate());
	if (!hasHadBirthdayThisYear) {
		years--;
	}
	return years;
});

const regionNamesInLocalLang = new Intl.DisplayNames(undefined, {
	type: "region",
});
</script>

<section>
  <h1>About me</h1>
  <p>
    I'm a {age} year old software engineer from
    <b>{regionNamesInLocalLang.of("DE") ?? "Germany"}</b>. I study Computer
    Science B.Sc. at Paderborn University. My skills primarily lie in Web
    Development but I have a general curiosity for all things Computer. My
    skills are put into production at
    <a class="osiro" target="_blank" href="https://osiro.app">
      <span class="osiro-logo" aria-hidden="true">{@html OsiroLogo}</span>osiro
    </a>
  </p>
</section>

<style>
  .osiro {
    color: rgb(36, 138, 255);
    white-space: nowrap;
  }
  .osiro-logo {
    display: inline-block;
    vertical-align: middle;
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.4rem;
    margin-top: 0.2rem;
  }
</style>
