<script lang="ts">
	import type { Lot } from '#lib/data/lots.ts';

	let { selectedLot }: { selectedLot: Lot | null } = $props();
</script>

{#if selectedLot}
	<div class="order-1 col-span-full bg-black/5 p-3 md:col-span-3">
		<div class="mb-3 flex items-end gap-2">
			<h2 class="text-xl font-medium">Lot: {selectedLot.id}</h2>
			<p class="text-sm text-black/60">{selectedLot.status}</p>
		</div>
		<p class="text-black/85">Size <span class="font-medium"> {selectedLot.size} </span></p>
		<p class="text-black/85">Price <span class="font-medium"> {selectedLot.price} </span></p>
	</div>
{:else}
	<p>Click on a lot on the map to view the details.</p>
{/if}
