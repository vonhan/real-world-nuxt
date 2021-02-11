<template>
    <div>
        <h1>Event #{{ event.title }}</h1>
    </div>
</template>

<script>
export default {
	//"head" property used by vue-meta plugin
	head() {
		return {
			title: this.event.title,
			meta: [{
				hid: "description",
				name: "description", // <-- for our meta description tag
				content: "What you need to know about event #" + this.event.title
			}]
		}
	},
	async asyncData({ $axios, error, params }) {
		try {
			const { data } = await $axios.get("http://localhost:3000/events/" + params.id)

			return {
				event: data
			}
		} catch (errorCaptured) {
			error({
				statusCode: 503,
				message: "Unable to fetch event #" + params.id
			})
		}
	},
}
</script>