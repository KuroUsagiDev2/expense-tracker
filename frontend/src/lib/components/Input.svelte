<script lang="ts">
	export let type: string = 'text';
	export let id: string = '';
	export let name: string = '';
	export let value: string = '';
	export let label: string = '';
	export let required: boolean = false;
	export let classes: string = '';
	export let color: 'indigo' | 'red' | 'green' | 'blue' | 'yellow' = 'indigo';

	$: name = name || id;
	$: label = label || id.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		value = input.value;
	}
</script>

<div>
	<label for={id} class="sr-only">{label}</label>
	<input
		{id}
		{name}
		{type}
		bind:value
		{...$$restProps}
		placeholder={label}
		{required}
		class={`relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-${color}-500 focus:outline-none focus:ring-${color}-500 sm:text-sm ${classes}`}
		on:input={handleInput}
	/>
</div>
