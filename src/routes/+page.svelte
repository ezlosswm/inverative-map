<script lang="ts">
	import AvailableLots from '#lib/components/AvailableLots.svelte';
	import LotDetails from '#lib/components/LotDetails.svelte';
	import PropertyMap from '#lib/components/PropertyMap.svelte';
	import { lots, type Lot } from '#lib/data/lots.ts';

	let selectedLot = $state<Lot | null>(lots[0] ?? 0);

	// We need a way for PropertyMap.svelte to communicate with
	// +page.svelte. We use a function as a prop.
	function handleLotSelect(lot: (typeof lots)[number]) {
		selectedLot = lot;
	}
</script>

<section class="mx-auto max-w-3xl py-10">
	<h1 class="text-center text-3xl font-semibold">Interactive map</h1>

	<div class="mt-10 grid grid-cols-12 gap-5">
		<PropertyMap {selectedLot} onSelect={handleLotSelect} />
		<LotDetails {selectedLot} />
		<AvailableLots selectedLotId={selectedLot?.id ?? null} onSelect={handleLotSelect} />
	</div>
</section>
