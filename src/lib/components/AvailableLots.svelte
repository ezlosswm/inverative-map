<script lang="ts">
	// This is where the interaction comes full circle.
	// Selecting a property from either the map or this
	// available list should update the panel.
	import { lots, type Lot } from '#lib/data/lots.ts';

	let { selectedLotId, onSelect }: { selectedLotId: number | null; onSelect: (lot: Lot) => void } =
		$props();

	const availableLots = $derived(lots.filter((lot) => lot.status === 'available'));
</script>

<div class="col-span-12">
	<div class="grid grid-cols-6 gap-1">
		{#each availableLots as lot (lot.id)}
			<button
				onclick={() => {
					onSelect(lot);
				}}
				class="col-span-1 cursor-pointer bg-black/5 p-1 transition-colors hover:bg-black/10 active:scale-99"
				class:active={selectedLotId === lot.id}
			>
				<h3 class="mb-3 text-center font-medium">
					Lot {lot.id}
				</h3>

				<div class="text-justify text-xs text-black/75">
					<p class="text-black/85">Size <span class="font-medium"> {lot.size} </span></p>
					<p class="text-black/85">Price <span class="font-medium"> {lot.price} </span></p>
					<p class="text-black/85">Deposti <span class="font-medium"> {lot.deposit} </span></p>
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.active {
		background: var(--color-accent);
		border-color: var(--color-accent);
	}
</style>
