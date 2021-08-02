<template>
    <input :value="modelValue" @input="updateInput" type="number" class="input" />
</template>

<script>
export default {
    name: "v-input",
	props: {
		modelValue: [Number],
	},
	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.input {
    outline: none;
    padding: 10px;
    border: 1px solid blueviolet;
}
</style>
