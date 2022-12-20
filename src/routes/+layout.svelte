<script lang="ts">
	import { page } from "$app/stores";
	import FaExternalLinkAlt from "svelte-icons/fa/FaExternalLinkAlt.svelte";
	import "bootstrap/dist/css/bootstrap.min.css";
	import "./styles.css";

	$: paths = [
		{
			label: "Home",
			href: "/",
			root: true
		},
		{
			label: "Projects",
			href: "/projects",
			external: false
		}
	];

	function isActive(path: any) {
		return path.root
			? $page.url.pathname === "" || $page.url.pathname === "/"
			: $page.url.pathname.includes(path.href);
	}
</script>

<div class="page-wrapper with-navbar d-flex flex-column">
	<nav class="navbar navbar-expand navbar-light bg-transparent">
		<div class="container-fluid">
			<div class="custom-content col-12 col-sm-11 col-md-10 col-xl-8 mx-auto">
				<div class="row">
					<div class="col d-flex align-items-center">
						<a href="/" class="navbar-brand"> Anton Aksionau </a>
					</div>
					<div class="col">
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav ms-auto">
								{#each paths as path (path.href)}
									<li class="nav-item">
										<a
											href={path.href}
											class="nav-link"
											class:active={isActive(path)}
											target={path.external ? "_blank" : "_self"}
										>
											{path.label}
											{#if path?.external}
												<div class="nav-icon">
													<FaExternalLinkAlt />
												</div>
											{/if}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
	<main class="container-fluid">
		<div class="custom-content col-12 col-sm-11 col-md-10 col-xl-8 mx-auto">
			<slot />
		</div>
	</main>
	<footer class="container-fluid mt-auto">
		<div class="text-secondary text-center p-3">
			Copyright © {new Date().getFullYear()} Anton Aksionau
		</div>
	</footer>
</div>

<style>
	.page-wrapper {
		min-height: 100%;
		height: 100%;
	}

	.custom-content {
		max-width: 964px;
	}

	.navbar-brand {
		font-weight: 700;
	}
	.nav-link {
		display: flex;
		align-items: center;
	}
	.nav-icon {
		height: 16px;
		width: 16px;

		display: flex;
		align-items: center;
		justify-content: center;

		margin: 0 5px;
	}

	.navbar-light .navbar-nav .nav-link.active {
		color: var(--color-primary-600);
		font-weight: bold;
	}
	.navbar-light .navbar-nav .nav-link:focus,
	.navbar-light .navbar-nav .nav-link:hover {
		color: var(--color-primary-600);
	}
</style>
