<template>
    <div class="circle" :style="{background: circle.color}"></div>
</template>

<script>
export default {
    name: "v-circle",
    props: {
        circle: {
            type: Object,
        },
    },
};
</script>

<style lang="scss" scoped>
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-bottom: 10px;

    &:not(:last-child) {
        margin-right: 10px;
    }
}
</style>
