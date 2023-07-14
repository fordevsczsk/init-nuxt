<script setup>
	// const { data } = await useFetch('https://swapi.dev/api/people/1');

	// Pick
	const { data } = await useFetch('https://swapi.dev/api/people/1', {
		pick: ['name']
	});

	console.log(data, 'data');
</script>

<template>
	<div>
		<pre>{{ data }}</pre>
	</div>
</template>
