<template>
    <div>
        <h1>Event #{{ this.$route.params.id }}</h1>
    </div>
</template>

<script>
export default {
	//"head" property used by vue-meta plugin
	head() {
		return {
			title: "Event #" + this.id,
			meta: [{
				hid: "description",
				name: "description", // <-- for our meta description tag
				content: "What you need to know about event #" + this.id
			}]
		}
	},
	computed: {
		id() {
			return this.$route.params.id
		}
	},
}
</script>