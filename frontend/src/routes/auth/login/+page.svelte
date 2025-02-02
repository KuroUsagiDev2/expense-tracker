<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { login, getUser } from '$lib/auth';


	let email = '';
	let password = '';
	let rememberMe = false;

	async function handleSubmit() {
        await login(email, password);
	}

    async function getUserData() {
        const user = await getUser();
        console.log(user);
    }
</script>

<Heading level={4}>Sign in to your account</Heading>
<form class="mt-8 space-y-6" on:submit|preventDefault={handleSubmit}>
	<div class="space-y-2">
		<Input
			type="email"
			label="Email address"
			id="email"
			autocomplete="email"
			bind:value={email}
			required
		></Input>
		<Input
			type="password"
			id="password"
			autocomplete="current-password"
			bind:value={password}
			required
		></Input>
	</div>

	<div class="flex items-center justify-between">
		<Checkbox id="remember-me" bind:checked={rememberMe}></Checkbox>
		<div class="text-sm">
			<a href="/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">
				Forgot your password?
			</a>
		</div>
	</div>

	<Button type="submit" classes="w-full">Sign in</Button>
	<Button onClick={getUserData} classes="w-full">Sign in</Button>
	<hr />
	<div class="text-center">
		Or you can also <a
			href="/auth/register"
			class="font-medium text-indigo-600 hover:text-indigo-500">register</a
		> for an account
	</div>
</form>
