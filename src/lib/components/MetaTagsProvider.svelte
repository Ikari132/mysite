<script lang="ts">
	import { page } from "$app/stores";

	export let title: string = "Anton Aksionau - Web developer";
	export let description: string = "";
	export let name: string = "default";
	const url = "https://www.aksionau.com";
</script>

<title>{title}</title>

<meta property="title" content={title} />
<meta property="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="{url}{$page.url.pathname}" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="{url}/meta/meta-{name}-og.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:image" content="{url}/meta/meta-{name}-tw.png" />
