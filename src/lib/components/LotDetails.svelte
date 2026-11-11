<script lang="ts">
	let { selectedLot } = $props();
</script>

{#if selectedLot}
	<div class="col-span-3 bg-neutral-100 p-3">
		<div class="flex items-end gap-4">
			<h2 class="text-xl font-medium">Lot: {selectedLot.id}</h2>
			<p class="text-red-600">{selectedLot.status}</p>
		</div>

		<p>{selectedLot.size}</p>
		<p>{selectedLot.price}</p>
	</div>
{:else}
	<p>Click on a lot on the map to view the details.</p>
{/if}
