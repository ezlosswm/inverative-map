<script lang="ts">
	// We need to display the map at the correct aspect ratio
	// and position a SVG overlay on top.

	// Once the layers line up, draw the polygons usings the
	// existing points data.
	import map from '#lib/assets/map.webp?enhanced';
	import { lots } from '#lib/data/lots.ts';
</script>

<div class="mt-10">
	<div class="relative aspect-square w-full">
		<enhanced:img
			src={map}
			alt="Map of the property"
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
				<polygon
					role="button"
					tabindex="0"
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
						}
					}}
					points={lot.points}
					// Dynamically assigned CSS classes
					class="cursor-pointer"
					class:available={lot.status === 'available'}
					class:sold={lot.status === 'sold'}
					onclick={() => alert(`Lot ID ${lot.id} is ${lot.status}`)}
				/>
			{/each}
		</svg>
	</div>
</div>

<style>
	.available {
		fill: #4a57cc85;
	}
	.sold {
		fill: rgba(255, 126, 126, 0.397);
	}
</style>
