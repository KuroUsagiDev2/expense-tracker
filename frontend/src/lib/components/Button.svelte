<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
	export let classes: string = '';
	export let color: 'indigo' | 'red' | 'green' | 'blue' | 'yellow' = 'indigo';
	export let onClick: (event: MouseEvent) => void = () => {};

	function handleClick(event: MouseEvent) {
		if (!disabled) {
			onClick(event);
		}
	}
</script>

<button
	{type}
	{disabled}
	{...$$restProps}
	class={`rounded-md bg-${color}-600 px-4 py-2 text-white hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2 ${classes}`}
	on:click={handleClick}
>
	<slot></slot>
</button>
