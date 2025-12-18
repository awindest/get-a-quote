<!-- <script lang="ts"> -->
<script>
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	let data = null
	const getQuote = async () => {
		const response = await fetch('http://api.quotable.io/random')
		data = await response.json()
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
