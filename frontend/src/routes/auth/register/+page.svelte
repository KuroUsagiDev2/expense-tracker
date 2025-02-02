<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { register } from '$lib/auth';

	let name = 'Jorge';
	let email = 'jorgecarbajulca@gmail.com';
	let password = 'password';
	let password_confirmation = 'password';

	async function handleSubmit() {
		await register(name, email, password, password_confirmation);
	}
</script>

<Heading level={4}>Register a new account</Heading>
<form class="mt-8 space-y-6" on:submit|preventDefault={handleSubmit}>
	<div class="space-y-2">
		<Input id="name" autocomplete="name" bind:value={name}></Input>
		<Input
			type="email"
			label="Email address"
			id="email"
			autocomplete="email"
			bind:value={email}
			required
		></Input>
		<Input type="password" id="password" bind:value={password} required></Input>
		<Input
			type="password"
			label="Confirm password"
			id="password_confirmation"
			bind:value={password_confirmation}
			required
		></Input>
	</div>
	<Button type="submit" classes="w-full">Register</Button>
	<hr />
	<div class="text-center">
		Or you can also
		<a href="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">sign in</a> to your
		account
	</div>
</form>
