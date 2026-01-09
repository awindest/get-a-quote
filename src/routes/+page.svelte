<!-- <script lang="ts"> -->
<script>
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	let data
	const getQuote = async () => {
		try {
			const response = await fetch('/api') // Relative URL calls the internal endpoint
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`)
			}
			data = await response.json()
		} catch (error) {
			console.error(' Error in getQuote: ', error.message)
		}
	}
	onMount(() => {
		getQuote() // initial quote
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
