<script lang="ts">
	export let id: string = '';
	export let name: string = '';
	export let checked: boolean = false;
	export let label: string = '';
	export let required: boolean = false;
	export let classes: string = '';
	export let color: 'indigo' | 'red' | 'green' | 'blue' | 'yellow' = 'indigo';

	$: name = name || id;
	$: label = label || id.replace(/[_-]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

	function handleChange(event: Event) {
		const input = event.target as HTMLInputElement;
		checked = input.checked;
	}
</script>

<div class="flex items-center justify-between">
	<input
		{id}
		{name}
		type="checkbox"
		bind:checked
		{...$$restProps}
		{required}
		class={`h-4 w-4 rounded border-gray-300 text-${color}-600 focus:ring-${color}-500 ${classes}`}
		on:change={handleChange}
	/> 
	<label for={id} class="ml-2 block text-sm text-gray-900">{label}</label>
</div>
