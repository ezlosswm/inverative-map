<script lang="ts">
	// We need to display the map at the correct aspect ratio
	// and position a SVG overlay on top.

	// Once the layers line up, draw the polygons usings the
	// existing points data.
	import { lots, type Lot } from '#lib/data/lots.ts';
	import map from '#lib/assets/map.webp?enhanced';

	// onSelect is a callback function
	let { selectedLot, onSelect }: { selectedLot: Lot | null; onSelect: (lot: Lot) => void } =
		$props();
</script>

<div class="order-2 col-span-full md:order-1 md:col-span-9">
	<div class="relative aspect-square w-full">
		<enhanced:img
			src={map}
			alt="Map of the property"
			loading="eager"
			fetchpriority="high"
			class="absolute inset-0 size-full object-cover"
		/>

		<!-- This telling the browser: -->
		<!-- Start at coordinate X = 0 and Y = 0 -->
		<!-- The coordinate system is 1254 wide & 1254 tall -->
		<svg viewBox="0 0 1254 1254" class="absolute inset-0 size-full">
			{#each lots as lot (lot.id)}
				<!-- A polygon is defined by a collection of coordinates -->
				<!-- which forms a shape -->

				<!-- Polygons support event handlers -->
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<polygon
					role={lot.status === 'sold' ? undefined : 'button'}
					tabindex={lot.status === 'sold' ? -1 : 0}
					aria-disabled={lot.status === 'sold'}
					onkeydown={(e) => {
						if (lot.status === 'sold') return;
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							onSelect(lot);
						}
					}}
					points={lot.points}
					// Dynamically assigned CSS classes
					class="transition-colors duration-200"
					class:cursor-pointer={lot.status !== 'sold'}
					class:pointer-events-none={lot.status === 'sold'}
					class:cursor-not-allowed={lot.status === 'sold'}
					class:opacity-50={lot.status === 'sold'}
					class:active={selectedLot?.id === lot.id}
					class:available={lot.status === 'available'}
					class:sold={lot.status === 'sold'}
					onclick={() => {
						if (lot.status === 'sold') return;
						onSelect(lot);
					}}
				/>
			{/each}
		</svg>
	</div>
</div>

<style>
	.active {
		fill: var(--color-remax-blue) !important;
		stroke: var(--color-remax-blue);
		stroke-width: 5;
		opacity: 0.4;
	}

	.available {
		fill: var(--color-accent);
		opacity: 0.3;
	}
	.sold {
		fill: var(--color-remax-red);
		opacity: 0.3;
	}
</style>
