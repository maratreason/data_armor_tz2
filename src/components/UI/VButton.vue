<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
    border: none;
    background: blueviolet;
    color: #fff;
    padding: 0 15px;
    cursor: pointer;
}
</style>
