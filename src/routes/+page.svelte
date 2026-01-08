<!-- <script lang="ts"> -->
<script>
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	let data = null
	const getQuote = async () => {
		try {
			// For internal assets or third-party resources that you know support HTTPS,
			// you can use protocol-relative URLs by omitting the http: or https: part (e.g., //example.com/resource.js). This way, the browser automatically uses the same protocol as the host page.
			const response = await fetch('//api.quotable.io/random')
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`)
			}
			data = await response.json()
		} catch (error) {
			console.error(' Error in getQuote: ', error.message)
		}
	}
	onMount(async () => {
		// const response = await fetch('http://api.quotable.io/random')
		// quote = await response.json()
		getQuote()
	})
	async function handleButtonClick() {
		data = await getQuote() // Invokes the server function via fetch
	}
</script>

<div class="container">
	<div transition:fade class="quote-panel">
		{#if data}
			<blockquote class="quotation">{data.content}</blockquote>
			<p class="author">{data.author}</p>
		{/if}
	</div>
	<div class="add-padding">
		<button onclick={getQuote}>
			<div class="button-outer">
				<div class="button-inner">
					<span>Get a Quote</span>
				</div>
			</div>
		</button>
	</div>
</div>
