<template>
    <div v-if="visible" class="self-loading">
        <van-loading class="loading-icon" :color="color" :type="type" :size="size" />
        <div class="mask"></div>
    </div>
</template>

<script>
export default {
	name: 'Loading',
	props: {
		visible: false,
		color: String,
		type: String,
		size: String
	},
	data() {
		return {}
	},
	mounted() {},
	methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.self-loading {
	.loading-icon {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.1);
	}
}
</style>
