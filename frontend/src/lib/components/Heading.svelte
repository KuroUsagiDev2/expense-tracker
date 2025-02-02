<script lang="ts">
	export let level: number = 4;
	export let classes: string = '';
	export let color: 'indigo' | 'red' | 'green' | 'blue' | 'yellow' = 'indigo';

    let sizes: { [key: number]: string } = {
        1: 'text-6xl',
        2: 'text-5xl',
        3: 'text-4xl',
        4: 'text-3xl',
        5: 'text-2xl',
        6: 'text-xl',
    };
</script>

<svelte:element
	this={`h${level}`}
	class={`mt-6 text-center ${sizes[level]} font-extrabold text-${color}-900 ${classes}`}
>
	<slot></slot>
</svelte:element>
