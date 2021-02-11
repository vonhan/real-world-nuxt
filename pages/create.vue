<template>
  <div>
    <h1>Create an event</h1>
  </div>
</template>


<script>
export default {
	//"head" property used by vue-meta plugin
	head() {
		return {
			title: "Crreate an Event",
			meta: [{
				hid: "description",
				name: "description", // <-- for our meta description tag
				content: "You can create a new event in your neighborhood"
			}]
		}
	},
}
</script>