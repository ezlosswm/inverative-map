<script lang="ts">
	// This is where the interaction comes full circle.
	// Selecting a property from either the map or this
	// available list should update the panel.
	import { lots } from '#lib/data/lots.ts';

	let { selectedLotId, onSelect } = $props();

	const availableLots = $derived(lots.filter((lot) => lot.status === 'available'));
</script>

<div class="col-span-12">
	<div class="grid grid-cols-6 gap-1">
		{#each availableLots as lot (lot.id)}
			<button
				onclick={() => {
					onSelect(lot);
				}}
				class="col-span-1 cursor-pointer bg-neutral-100 p-1 transition-colors hover:bg-neutral-200 active:scale-99"
				class:active={selectedLotId === lot.id}
			>
				<article>
					<h3>
						Lot {lot.id}
					</h3>

					<div class="text-xs">
						<p>{lot.size}</p>
						<p>{lot.price}</p>
						<p>{lot.deposit}</p>
					</div>
				</article>
			</button>
		{/each}
	</div>
</div>

<style>
	.active {
		background: rgb(9, 197, 71);
		border-color: #2563eb;
	}
</style>
